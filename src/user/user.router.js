import { Router } from 'express';
import {
  createUser,
  deleteUser,
  login,
  readUserByID,
  updateUser,
} from './user.controller';
import authenticate from '../auth/authenticate';

userRouter.post('/login', login);
userRouter.post('/', createUser);
userRouter.get('/:_id', readUserByID);
userRouter.patch('/', authenticate, updateUser);
userRouter.delete('/', authenticate, deleteUser);

export default userRouter;
