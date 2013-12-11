
var io = require('socket.io-client');
var fs = require('fs');

//var url = 'http://change-my-lights.herokuapp.com';
var url = 'http://localhost:5000';

var socket = io.connect(url);
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
