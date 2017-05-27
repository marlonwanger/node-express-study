import express from 'express';
import app from '../app';
import UsersController from '../controllers/users';

console.log(app);

const router = express.Router();

const usersController = new UsersController();

router.get('/', (req, res) => usersController.get(req, res));

export default router;