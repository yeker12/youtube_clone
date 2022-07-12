import express from "express";
import { watchVideos, getEdit, postEdit, getUpload, postUpload, getDelete } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watchVideos);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").get(getDelete);
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;