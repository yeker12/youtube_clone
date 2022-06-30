import express from "express";
import { homeVideo } from "../controllers/videoController";
import { joinUsers } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", homeVideo);
globalRouter.get("/join", joinUsers);

export default globalRouter;