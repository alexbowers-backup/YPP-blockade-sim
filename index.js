var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	console.log('a user has connected');
	socket.on('disconnect', function() {
		console.log('User disconnected');
		io.emit('shutdown', {for: 'everyone'});
	});
});

http.listen(3000, function() {
	console.log('Listening on 3000');
});
