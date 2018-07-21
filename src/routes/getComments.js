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
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        res.send("Something went wrong");
        return;
      }
    })
    .then((responseJson) => {
      res.send(responseJson);
    })
  }
});

export default router;