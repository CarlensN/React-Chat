import WebSocket from 'ws';

const port = 8080;
console.log(`Server started on ${port}`);

const server = new WebSocket.Server({ port });

server.on('connection', (socket: WebSocket) => {
	console.log('A client connected.');

	// Send a welcome message to the client.
	socket.send('Welcome to the server!');
});

server.on('message', (message: string) => {
	console.log(`Received message: ${message}`);

	// Broadcast the message to all connected clients.
	server.clients.forEach((client: WebSocket) => {
		client.send(message);
	});
});

server.on('close', (socket: WebSocket) => {
	console.log('A client disconnected.');
});
