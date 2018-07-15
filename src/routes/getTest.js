var express = require('express');
var fetch = require("node-fetch");
var jwt = require('jsonwebtoken');
var router = express.Router();

router.get('/', function(req, res) {
  var token = req.headers['authorization'];
  if (!token) {
    res.status(401).send({ error: "Auth token not found" });
    return;
  }

  token = token.replace('Bearer ', '')

  jwt.verify(token, 'test_password', function(err, user) {
    if (err) {
      res.status(401).send({
        error: 'Invalid Token'
      })
    } else {
      res.send({
        message: 'Logged in'
      })
    }
  });

});

module.exports = router;