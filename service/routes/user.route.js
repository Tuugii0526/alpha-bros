import express from "express";
import { getUser, getUsers } from "../controllers/user.Controller.js";

const userRouter = express.Router();

userRouter.get("/user", getUser);
userRouter.get("/users", getUsers);
export default userRouter;
