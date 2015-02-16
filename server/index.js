var express = require('express');
var app = express();
var faker = require('faker');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')

var things = [];
for (var index = 0; index < 100; index++) {
  var item = faker.helpers.createCard();
  item.id = index
  things.push(item);
}

app.use(bodyParser.json());
app.use(cookieParser());

app.use(function (req, res, next) {
  if (req.cookies.authenticated) {
    next();
  } else {
    res.status(401).end();
  }

});
app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/things', function (req, res) {
  res.send(things);
});

app.get('/things/:id', function (req, res) {
  var filtered = things.filter(function (item) {
    return item.id == req.params.id;
  });
  if (filtered[0]) {
    res.send(filtered[0]);
  } else {
    res.status(404).end();
  }
});

app.post('/things', function (req, res) {
  var item = req.body;
  if (item) {
    item.id = things.length;
    things.push(item)
    res.status(201).send({id : item.id});
  } else {
    res.status(400).end();
  }
});


var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

