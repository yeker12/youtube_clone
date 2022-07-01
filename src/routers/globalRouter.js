import express from "express";
import { homeVideo, searchVideo } from "../controllers/videoController";
import { joinUsers, loginUser } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", homeVideo);
globalRouter.get("/join", joinUsers);
globalRouter.get("/login", loginUser);
globalRouter.get("/search", searchVideo);

export default globalRouter;