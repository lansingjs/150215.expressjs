var http = require('http');
var fs = require('fs');
// __dirname
// __filename
var data = fs.readFileSync(__dirname + '/../static/index.html');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(data);
});

server.listen(8000);