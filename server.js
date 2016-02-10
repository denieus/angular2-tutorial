"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var server = express();

server.use(bodyParser.json());

server.use('/', express.static(__dirname + '/'));

var messages = [];

server.post('/message', function(req, res) {
    messages.push(req.body);
    res.send(200);
});

server.get('/messages', function(req, res) {
    res.send(messages);
});

server.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, '0.0.0.0', function() {
    console.log('Chat app listening on port 3000!');
});