var express = require('express');
var router = express.Router();

router.get('/', function() {
    console.log('Hello World');
});

module.exports = router;