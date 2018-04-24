var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.use(express.static(__dirname + '/www/styles'));
app.use(express.static(__dirname + '/www/sections'));
app.use(express.static(__dirname + '/www/bower_components'));

app.listen(8080);