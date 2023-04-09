"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
console.log(`Server started on port 8080`);
const server = new ws_1.default.Server({ port: 8080 });
server.on('connection', (socket) => {
    console.log('A client connected.');
    // Send a welcome message to the client.
    socket.send('Welcome to the server!');
});
server.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Broadcast the message to all connected clients.
    server.clients.forEach((client) => {
        client.send(message);
    });
});
server.on('close', (socket) => {
    console.log('A client disconnected.');
});
//# sourceMappingURL=server.js.map