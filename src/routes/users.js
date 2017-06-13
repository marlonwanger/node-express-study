import express from 'express';
import app from '../app';
import UsersController from '../controllers/users';
import database from '../config/database';

const databases = database();

const router = express.Router();

const usersController = new UsersController(databases.models.Users);

router.get('/', (req, res) => usersController.get(req, res));

export default router;