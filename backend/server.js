const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const PORT = process.env.PORT || 5000;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require('./routes/routes');
app.use(router);

io.on('connection', (socket) => {
    console.log('New WebSocket Connection');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    })
})

server.listen(PORT, () => {
    console.log(`Server has started on PORT ${PORT}`);
})

