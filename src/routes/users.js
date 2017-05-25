  import express from 'express';

  const router = express.Router();

  router.get('/', (req, res) => res.send([{
    name: 'Marlon',
    email: 'teste@mail.com',
    password: '123456'
  }]));

  export default router;