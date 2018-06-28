var express = require('express');

var hwRoute = require('./routes/helloworld');

var app = express();

app.use('/hello', hwRoute);

module.exports = app;