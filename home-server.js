
var io = require('socket.io-client');

var socket = io.connect('http://change-my-lights.herokuapp.com/');
socket.on('connect', function () {
  console.log("Connected to main server");
});

socket.on('disconnect', function () {
  console.log("Disconnected from main server");
});
