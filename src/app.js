var express = require('express');

var getTest = require('./routes/getTest');
var postTest = require('./routes/postTest');

var app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/get', getTest);
app.use('/login',postTest);

module.exports = app;