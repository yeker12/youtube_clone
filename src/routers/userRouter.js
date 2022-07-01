import express from "express";
import { editUsers, removeUsers, seeUser, logoutUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", seeUser);
userRouter.get("/logout", logoutUser);
userRouter.get("/edit", editUsers);
userRouter.get("/remove", removeUsers);

export default userRouter;