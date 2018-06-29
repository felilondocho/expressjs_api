var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    var name = req.body.name;
    var color = req.body.color;
    res.send(`Post received: ${name}, ${color}`);
});

module.exports = router;