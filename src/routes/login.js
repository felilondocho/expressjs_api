import express from 'express';
import jwt from 'jsonwebtoken';
import fetch from 'node-fetch';

var router = express.Router();

router.post('/', function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        res.send("Something went wrong");
        return;
      }
    })
    .then((responseJson) => {
      let user = responseJson.filter(user => user.username === username);
      if (user.length > 0) {
        const tokenData = { username };
        var token = jwt.sign(tokenData, 'test_password', {
          expiresIn: 60 * 60 * 24 // 24 hours
        });
        res.send(token);
      } else {
        res.status(401).send({
          error: 'Invalid user',
        })
      }
    });
});

export default router;