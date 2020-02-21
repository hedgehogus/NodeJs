const Server = require('socket.io');

const server = new Server(5002);

server.on('connection', socket => {
    socket.on('chat', message => {
        server.emit('chat', message)
    });

    socket.emit('ready', 'welcome to codedojo')
})