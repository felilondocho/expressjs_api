var express = require('express');
var fetch = require("node-fetch");
var router = express.Router();

router.get('/', function(req, res) {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then((responseJson) => res.send(responseJson));
  // res.send('Get received');
});

module.exports = router;