/* jshint node:true */
'use strict';

var http = require('http');
var fs = require('fs');
var request = require('request');

var herokuInstance = 'http://change-my-lights.herokuapp.com/SetIp';
var token = 'itstestingtime';

http.createServer(function (req, res) {

 var data = '';

 req.on('data', function (chunk) {
   data += chunk;
 });

 req.on('end', function () {
   fs.writeFileSync('/var/colors.conf', data);
   res.send('You Did it!!');
 });

 req.on('error', function (e) {
   res.send(e);
 });

}).listen('8080');

setInterval(function () {
 request('http://bot.whatismyipaddress.com', function (err, resp, data) {
   request.post(herokuInstance + '/' + token, data);
 });
}, 1000 * 60 * 1);