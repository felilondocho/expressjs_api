import express from 'express';
import fetch from 'node-fetch';
import Auth from '../services/Auth';

var router = express.Router();

var auth_instance = new Auth();

router.post('/', function(req, res) {
  const token = req.headers['authorization'];

  const auth = auth_instance.authenticate(token);

  const currentInitChunk = req.body.currentInitChunk;
  const currentEndChunk = req.body.currentEndChunk;

  if (auth.status === 401) {
    res.status(401).send({ error: auth.error });
  } else {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        res.send("Something went wrong");
        return;
      }
    })
    .then((responseJson) => {
      const responseChunk = responseJson.slice(currentInitChunk,currentEndChunk)
      res.send(responseChunk);
    })
  }

});

export default router;