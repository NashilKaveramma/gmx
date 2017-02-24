var express = require("express");
var http    = require("http");
var fs = require("fs");
var path = require("path");
var bodyParser = require ("body-parser");
var info=require("./info.js");
var app = express();
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({
	extended: true
	})
);
app.use( express.static( __dirname  + '../Client' ) );
app.post('/userInfo/', function(req, res){
	var details = {};
	 details.username = req.body.username;
	 details.password = req.body.password;
	 fs.appendFile(info.details, JSON.stringify(details), function(err) {
    if (err) throw err;
    });
	res.send(details);
});
app.listen(9001, function() {
   console.log('Express server listening on port 9001');
} );
