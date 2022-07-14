import express from "express";
import morgan from "morgan";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

// 서버(app) 만들기: express 함수 호출로 가능
const app = express();
// pug 설정
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
// morgan 정의하기
const logger = morgan("dev");
// app.use는 global middleware
app.use(logger);
// express가 form의 value 값을 읽을 수 있도록 설정
app.use(express.urlencoded({extended: true}));
// 라우터 사용
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

export default app;
