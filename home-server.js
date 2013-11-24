
var io = require('socket.io-client');
var fs = require('fs');

var socket = io.connect('http://change-my-lights.herokuapp.com');
socket.on('connect', function () {
  console.log("Connected to main server");
});

socket.on('disconnect', function () {
  console.log("Disconnected from main server");
});

socket.on('change-color', function(data){
	console.log("Change color to: " + data.color);
	fs.writeFile("color-data.txt", data.color, function(err){
		if (err)
			console.log(err);
	});
});
