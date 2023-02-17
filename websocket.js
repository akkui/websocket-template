//const WebSocket = require('ws');
const socket = new WebSocket("ws://localhost:8080/");

socket.onopen = function (e) {
    socket.send(JSON.stringify({ a: 'b' }));
};

socket.onmessage = function (event) {
    console.log(`Server response: ${event.data}`);
};

socket.onclose = function (event) {
    console.log('Connection closed.')
};

socket.onerror = function (error) {
    console.log(`An error ocurred: ` + error);
};