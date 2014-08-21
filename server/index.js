var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../static'));

app.get('/hello.txt', function(req, res){
  res.send('Hello World');
});

app.get('/question', function (req, res) {
  res.send("42");
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

