import express from 'express';
import cors from 'cors';
import cats from '../data/resources.js';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/cats', (req, res) => {
  res.json(cats);
});

app.get('/api/cats/1', (req, res) => {
  res.json(cats[0]);
});

export default app;