let port = null;
let reader = null;
let writer = null;
let isTestingBaud = false;

const baudRates = [
    115200, 9600, 57600, 38400, 19200, 4800, 2400, 1200
];

const terminal = document.getElementById('terminal');
const debugPanel = document.getElementById('baudTestStatus');
const connectButton = document.getElementById('connectButton');
const startBaudTest = document.getElementById('startBaudTest');
const sendButton = document.getElementById('sendButton');
const clearButton = document.getElementById('clearButton');
const messageInput = document.getElementById('messageInput');
const statusBar = document.getElementById('statusBar');

function updateStatus(text, className) {
    statusBar.textContent = text;
    statusBar.className = `status ${className}`;
}

function appendDebug(message, className = '') {
    const div = document.createElement('div');
    div.className = `baud-test-status ${className}`;
    div.textContent = message;
    debugPanel.appendChild(div);
    debugPanel.scrollTop = debugPanel.scrollHeight;
}

function appendToTerminal(text) {
    const sanitized = text.replace(/[^\x20-\x7E\n\r]/g, '·');
    terminal.textContent += sanitized;
    terminal.scrollTop = terminal.scrollHeight;
    return sanitized === text;
}

async function connect() {
    try {
        port = await navigator.serial.requestPort();
        connectButton.textContent = 'Disconnect';
        startBaudTest.disabled = false;
        updateStatus('Connected - Ready for baud detection', 'connected');
    } catch (error) {
        console.error('Error:', error);
        appendDebug(`Error: ${error.message}`, 'error');
    }
}

async function disconnect() {
    if (reader) {
        await reader.cancel();
        await reader.releaseLock();
        reader = null;
    }
    if (writer) {
        await writer.releaseLock();
        writer = null;
    }
    if (port) {
        await port.close();
        port = null;
    }

    connectButton.textContent = 'Connect';
    startBaudTest.disabled = true;
    sendButton.disabled = true;
    messageInput.disabled = true;
    updateStatus('Disconnected', 'disconnected');
    isTestingBaud = false;
}

async function testBaudRate(baudRate) {
    try {
        if (reader) {
            await reader.cancel();
            await reader.releaseLock();
        }
        if (writer) {
            await writer.releaseLock();
        }
        await port.close();
        
        appendDebug(`Testing baud rate: ${baudRate}...`);
        await port.open({ 
            baudRate: baudRate,
            dataBits: 8,
            stopBits: 1,
            parity: "none",
            flowControl: "none"
        });

        reader = port.readable.getReader();
        writer = port.writable.getWriter();

        let validCharacters = true;
        let receivedData = false;
        
        const timeout = setTimeout(() => {
            reader.cancel();
        }, 2000);

        while (true) {
            const { value, done } = await reader.read();
            if (done) break;
            
            receivedData = true;
            const text = new TextDecoder().decode(value);
            validCharacters = appendToTerminal(text);
            
            if (!validCharacters) {
                appendDebug(`Invalid characters detected at ${baudRate}`, 'error');
                break;
            }
        }

        clearTimeout(timeout);

        if (validCharacters && receivedData) {
            appendDebug(`✓ Valid output at ${baudRate}`, 'success');
            return true;
        }
        
        return false;
    } catch (error) {
        appendDebug(`Error testing ${baudRate}: ${error.message}`, 'error');
        return false;
    }
}

async function startBaudDetection() {
    if (!port || isTestingBaud) return;
    
    isTestingBaud = true;
    updateStatus('Testing baud rates...', 'testing');
    terminal.textContent = '';
    debugPanel.textContent = '';
    startBaudTest.disabled = true;

    for (const baudRate of baudRates) {
        if (!isTestingBaud) break;
        
        if (await testBaudRate(baudRate)) {
            updateStatus(`Connected at ${baudRate} baud`, 'connected');
            messageInput.disabled = false;
            sendButton.disabled = false;
            return;
        }
    }

    if (isTestingBaud) {
        updateStatus('Baud rate detection failed', 'disconnected');
        await disconnect();
    }
}

async function sendMessage() {
    const message = messageInput.value + '\n';
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    await writer.write(data);
    messageInput.value = '';
}

connectButton.addEventListener('click', () => {
    if (port) {
        disconnect();
    } else {
        connect();
    }
});

startBaudTest.addEventListener('click', startBaudDetection);
sendButton.addEventListener('click', sendMessage);
clearButton.addEventListener('click', () => {
    terminal.textContent = '';
    debugPanel.textContent = '';
});

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});