'use strict';

var http    = require('http');
var express = require('express');
var compression = require('compression');
var webp    = require('../index.js');
var fs      = require('fs');
var app     = express();

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

var publicDir = __dirname + '/public';
var cacheDir = __dirname + '/webp-cache';

app.use(compression());
app.use('/images/photo', webp(publicDir, {
	quality: 80,
	preset: 'photo',
	cacheDir: cacheDir
}));
app.use(express.static(publicDir));

var server  = http.createServer(app);
server.listen(3000);