import express from 'express';
import fetch from 'node-fetch';
import Auth from '../services/Auth';

var router = express.Router();

var auth_instance = new Auth();

router.post('/', function(req, res) {
  const token = req.headers['authorization'];

  const auth = auth_instance.authenticate(token);

  if (auth.status === 401) {
    res.status(401).send({ error: auth.error });
  } else {
    const postId = req.body.postId;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(response => Promise.all([response.ok, response.json()]))
    .then(([responseOk, body]) => {
      if (responseOk) {
        res.send(body);
      } else {
        res.status(401).send("Database is down");
      };
    });
  }
});

export default router;