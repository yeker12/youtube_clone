import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

// PORT 정의
const PORT = 4000;
// 서버(app) 만들기: express 함수 호출로 가능
const app = express();
// morgan 정의하기
const logger = morgan("dev");
// app.use는 global middleware
app.use(logger);

// 라우터 사용
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);


// 서버(app) listening용 callback 함수 정의
const handleListening = () => console.log(`Server is listening on http://localhost:${PORT}`);

// 서버(app) listening 하기
app.listen(PORT, handleListening);
