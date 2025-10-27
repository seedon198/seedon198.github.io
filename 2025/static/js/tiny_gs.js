let port = null;
let reader = null;
let writer = null;

const terminal = document.getElementById('terminal');
const connectButton = document.getElementById('connectButton');
const sendButton = document.getElementById('sendButton');
const clearButton = document.getElementById('clearButton');
const messageInput = document.getElementById('messageInput');
const baudRateSelect = document.getElementById('baudRate');
const statusBar = document.getElementById('statusBar');

async function connect() {
    try {
        port = await navigator.serial.requestPort();
        await port.open({ 
            baudRate: parseInt(baudRateSelect.value),
            dataBits: 8,
            stopBits: 1,
            parity: "none",
            flowControl: "none"
        });

        connectButton.textContent = 'Disconnect';
        sendButton.disabled = false;
        statusBar.textContent = 'Connected';
        statusBar.classList.remove('disconnected');
        statusBar.classList.add('connected');

        reader = port.readable.getReader();
        writer = port.writable.getWriter();

        readLoop();
    } catch (error) {
        console.error('Error:', error);
        appendToTerminal(`Error: ${error.message}\n`);
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
    sendButton.disabled = true;
    statusBar.textContent = 'Disconnected';
    statusBar.classList.remove('connected');
    statusBar.classList.add('disconnected');
}

async function readLoop() {
    while (true) {
        try {
            const { value, done } = await reader.read();
            if (done) {
                break;
            }
            const text = new TextDecoder().decode(value);
            appendToTerminal(text);
        } catch (error) {
            console.error('Error in read loop:', error);
            break;
        }
    }
    await disconnect();
}

async function sendMessage() {
    const message = messageInput.value + '\n';
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    await writer.write(data);
    messageInput.value = '';
}

function appendToTerminal(text) {
    terminal.textContent += text;
    terminal.scrollTop = terminal.scrollHeight;
}

connectButton.addEventListener('click', () => {
    if (port) {
        disconnect();
    } else {
        connect();
    }
});

sendButton.addEventListener('click', sendMessage);
clearButton.addEventListener('click', () => {
    terminal.textContent = '';
});

messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});