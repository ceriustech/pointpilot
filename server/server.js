const io = require('socket.io')(3001, {
	cors: {
		origin: '*', // Allow all origins
		methods: ['GET', 'POST'],
	},
});

io.on('connection', (socket) => {
	console.log('a user connected');

	// When a user disconnects
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});

	// Handle custom events
	socket.on('my event', (data) => {
		console.log('received data: ', data);
	});

	// Broadcast a message to all connected clients
	socket.emit('news', { hello: 'world' });
});

console.log('listening on *:3001');
