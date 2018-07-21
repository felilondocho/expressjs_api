import express from 'express';

import getPosts from './routes/getPosts';
import login from './routes/login';
import getComments from './routes/getComments';

var app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/getPosts', getPosts);
app.use('/login', login);
app.use('/getComments', getComments);

export default app;