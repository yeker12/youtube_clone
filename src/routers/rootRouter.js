import express from "express";
import { homeVideo, searchVideo } from "../controllers/videoController";
import { getJoin, postJoin, loginUser } from "../controllers/userController";

const rootRouter = express.Router();

rootRouter.get("/", homeVideo);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", loginUser);
rootRouter.get("/search", searchVideo);

export default rootRouter;