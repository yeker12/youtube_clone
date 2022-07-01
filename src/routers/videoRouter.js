import express from "express";
import { watchVideos, editVideos, removeVideos, uploadVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", uploadVideo);
videoRouter.get("/:id(\\d+)", watchVideos);
videoRouter.get("/:id(\\d+)/edit", editVideos);
videoRouter.get("/:id(\\d+)/remove", removeVideos);

export default videoRouter;