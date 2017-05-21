import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World'));

app.get('/users', (req, res) => res.send([{
  name: 'Marlon',
  email: 'teste@mail.com',
  password: '123456'
}]));

export default app;