import express from 'express';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';

var router = express.Router();

router.post('/', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => Promise.all([response.ok, response.json()]))
    .then(([responseOk, body]) => {
      if (responseOk) {
        let user = body.filter(user => user.username === username);
        if (user.length > 0) {
          const tokenData = { username };
          var token = jwt.sign(tokenData, 'test_password', {
            expiresIn: 60 * 60 * 24 // 24 hours
          });
          res.send(token);
        } else {
          res.status(401).send('Wrong Username or Password');
        }
      } else {
        res.status(401).send("Database is down");
      };
    });
});

export default router;