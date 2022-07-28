import express from "express";
import { editUsers, removeUsers, seeUser, logoutUser, startGithubLogin, finishGithubLogin} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/:id", seeUser);
userRouter.get("/logout", logoutUser);
userRouter.get("/edit", editUsers);
userRouter.get("/remove", removeUsers);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);

export default userRouter;