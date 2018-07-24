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
    .then(response => Promise.all([response.ok, response.json()]))
    .then(([responseOk, body]) => {
      if (responseOk) {
        const responseChunk = body.slice(currentInitChunk,currentEndChunk);
        res.send(responseChunk);
      } else {
        res.status(401).send({error: "Database is down"});
      };
    });
  }

});

export default router;