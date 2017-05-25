import express from 'express';
import UsersController from '../controllers/users';

const router = express.Router();

const usersController = new UsersController();

router.get('/', (req, res) => usersController.get(req, res));

export default router;