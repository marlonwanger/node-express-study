import express from 'express';
import usersRouter from './users.js'


const router = express.Router();

router.use('/users', usersRouter);
router.get('/', (req, res) => res.send('Index Route'));


export default router;