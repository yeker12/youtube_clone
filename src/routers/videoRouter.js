import express from "express";
import { watchVideos, editVideos } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", watchVideos);
videoRouter.get("/edit", editVideos);

export default videoRouter;