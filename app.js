
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
var token = "itstestingtime";
var homeServerInstance = "";

// all environments
app.set('port', process.env.PORT || 80);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


app.post("/ChangeColor", function (req, res){
	console.log(req.body);
	// send to known ip address
	res.send("ok");
});


app.post("/SetIp/:token", function (req, res){
	if (req.params.token == token)
	{
        homeServerInstance = req.params.data;
        res.send("Ip set to: " + homeServerInstance);
	}
});
