// Flipper Zero DFU constants
const FLIPPER_VENDOR_ID = 0x0483;
const FLIPPER_PRODUCT_ID = 0xdf11;
const DFU_DETACH = 0x00;
const DFU_DNLOAD = 0x01;
const DFU_UPLOAD = 0x02;
const DFU_GETSTATUS = 0x03;
const DFU_CLRSTATUS = 0x04;
const DFU_ABORT = 0x06;

let device = null;
let interfaceNumber = 0;
let firmwareFile = null;
let firmwareContents = {};

function log(message, isError = false) {
    const logDiv = document.getElementById('log');
    const entry = document.createElement('div');
    entry.textContent = `${new Date().toLocaleTimeString()} - ${message}`;
    if (isError) entry.style.color = '#dc2626';
    logDiv.appendChild(entry);
    logDiv.scrollTop = logDiv.scrollHeight;
}

function updateStatus(message, isError = false) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.className = 'status ' + (isError ? 'error' : 'success');
}

function updateProgress(percent) {
    document.getElementById('progress').style.width = `${percent}%`;
}

async function extractTarGz(file) {
    try {
        const arrayBuffer = await file.arrayBuffer();
        const gzipped = new Uint8Array(arrayBuffer);
        
        // First decompress the gzip
        const inflated = pako.inflate(gzipped);
        
        // Process the tar
        const files = {};
        let offset = 0;
        
        while (offset < inflated.length) {
            // Read tar header
            const header = inflated.slice(offset, offset + 512);
            
            // Check for end of archive
            if (header[0] === 0) break;
            
            // Parse filename (100 bytes)
            const filename = new TextDecoder().decode(header.slice(0, 100)).replace(/\0/g, '').trim();
            
            // Parse file size (12 bytes, octal)
            const sizeStr = new TextDecoder().decode(header.slice(124, 136)).trim();
            const size = parseInt(sizeStr, 8);
            
            if (size > 0) {
                // Read file content
                const content = inflated.slice(offset + 512, offset + 512 + size);
                files[filename] = content;
                
                // Move to next header (accounting for padding)
                offset += 512 + (Math.ceil(size / 512) * 512);
            } else {
                offset += 512;
            }
        }
        
        return files;
    } catch (error) {
        throw new Error(`Failed to extract tar.gz: ${error.message}`);
    }
}

document.getElementById('firmware').addEventListener('change', async (event) => {
    try {
        firmwareFile = event.target.files[0];
        log('Processing firmware file...');
        
        // Extract the tar.gz
        firmwareContents = await extractTarGz(firmwareFile);
        
        // Display file list
        const filesDiv = document.getElementById('files');
        filesDiv.innerHTML = '';
        Object.keys(firmwareContents).forEach(filename => {
            const size = firmwareContents[filename].length;
            filesDiv.innerHTML += `<div>${filename} (${(size/1024).toFixed(2)} KB)</div>`;
        });
        
        document.getElementById('flash').disabled = !device;
        log('Firmware file processed successfully');
        updateStatus('Firmware file processed successfully', false);
        
    } catch (error) {
        log(`Error processing firmware: ${error.message}`, true);
        updateStatus(`Error processing firmware: ${error.message}`, true);
    }
});

document.getElementById('connect').addEventListener('click', async () => {
    try {
        device = await navigator.usb.requestDevice({
            filters: [{
                vendorId: FLIPPER_VENDOR_ID,
                productId: FLIPPER_PRODUCT_ID
            }]
        });

        await device.open();
        await device.selectConfiguration(1);
        await device.claimInterface(interfaceNumber);

        log('Device connected successfully');
        updateStatus('Device connected successfully', false);
        document.getElementById('flash').disabled = !firmwareContents;
        document.getElementById('connect').disabled = true;

    } catch (error) {
        log(`Connection error: ${error.message}`, true);
        updateStatus(`Connection error: ${error.message}`, true);
    }
});

document.getElementById('flash').addEventListener('click', async () => {
    if (!device || !Object.keys(firmwareContents).length) return;

    try {
        log('Starting firmware flash process...');
        updateStatus('Flashing firmware...', false);
        document.getElementById('flash').disabled = true;

        // Clear any previous state
        await device.controlTransferOut({
            requestType: 'class',
            recipient: 'interface',
            request: DFU_ABORT,
            value: 0,
            index: interfaceNumber
        });

        // Find core firmware file
        const coreFirmwareFile = Object.keys(firmwareContents).find(name => 
            name.includes('core.bin') || name.endsWith('/core.bin'));

        if (!coreFirmwareFile) {
            throw new Error('core.bin not found in firmware package');
        }

        const coreFirmware = firmwareContents[coreFirmwareFile];
        const CHUNK_SIZE = 1024;
        const totalChunks = Math.ceil(coreFirmware.length / CHUNK_SIZE);

        for (let i = 0; i < totalChunks; i++) {
            const chunk = coreFirmware.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
            
            // Send chunk
            await device.controlTransferOut({
                requestType: 'class',
                recipient: 'interface',
                request: DFU_DNLOAD,
                value: i + 1,
                index: interfaceNumber
            }, chunk);

            // Check status
            const statusResult = await device.controlTransferIn({
                requestType: 'class',
                recipient: 'interface',
                request: DFU_GETSTATUS,
                value: 0,
                index: interfaceNumber
            }, 6);

            if (statusResult.data.getUint8(0) !== 0) {
                throw new Error(`DFU status error: ${statusResult.data.getUint8(0)}`);
            }

            const percent = Math.round((i + 1) / totalChunks * 100);
            updateProgress(percent);
            log(`Flashed ${percent}%`);
        }

        log('Core firmware flash complete!');
        updateStatus('Firmware flashed successfully! Device will restart.', false);
        updateProgress(100);

    } catch (error) {
        log(`Flash error: ${error.message}`, true);
        updateStatus(`Flash error: ${error.message}`, true);
        document.getElementById('flash').disabled = false;
    }
});