var http    = require('http');
var express = require('../node_modules/express');
var webp    = require('../index.js');
var app     = express();

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});

app.use(express.compress());
app.use('/images/', webp(__dirname, {
	quality: 80
}));
app.use(express.static(__dirname));

var server  = http.createServer(app);
server.listen(3000);