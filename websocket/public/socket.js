const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

//const ws = new WebSocket('ws://localhost:5001');

const socket = io('http://localhost:5002');

function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
}

form.addEventListener('submit', event => {
    event.preventDefault();

    socket.send(input.value);
    input.value = '';
});

socket.on('connect', () => setStatus('ONLINE'));

socket.on('disconnect', () => setStatus('DISCONNECTED'));

socket.on('chat', message => printMessage(message));

socket.on('ready', message => printMessage(message));