//const WebSocket = require('ws');
const socket = new WebSocket("ws://localhost:8080/");

socket.onopen = function (e) {
    socket.send(JSON.stringify({ message: 'Connection has been opened.' }));
};

socket.onmessage = function (event) {
    console.log("Server Responde: " + event.data);
};

socket.onclose = function (event) {
    console.log('Connection has been closed.')
};

socket.onerror = function (error) {
    console.log(`An error ocurred: ` + error);
};
