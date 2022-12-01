import express from "express";
import {
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/usersController.js";

const userRouter = express.Router();
userRouter.get(`/`, getUsers);
userRouter.get(`/:id`, getUserById);
userRouter.put(`/:id`, updateUser);
userRouter.delete(`/:id`, deleteUser);

export default userRouter;
