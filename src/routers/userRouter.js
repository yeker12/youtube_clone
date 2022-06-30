import express from "express";
import { editUsers, removeUsers } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/edit", editUsers);
userRouter.get("/remove", removeUsers);

export default userRouter;