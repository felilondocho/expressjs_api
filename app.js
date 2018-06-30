var express = require('express');

var getTest = require('./routes/getTest');
var postTest = require('./routes/postTest');

var app = express();

app.use(express.json());

app.use('/get', getTest);
app.use('/post',postTest);

module.exports = app;