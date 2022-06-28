import express from "express";
import morgan from "morgan";

// PORT 정의
const PORT = 4000;
// 서버(app) 만들기: express 함수 호출로 가능
const app = express();
// morgan 정의하기
const logger = morgan("dev");


// 서버(app) GET request용 callback 함수 정의
const handleHome = (req, res) => {
   // 빈 화면으로 끝내기
   // return res.end
   // 화면에 글씨 보내기
   return res.send("<h1>I still love you!</h1>"); 
}

// object도 전송 가능
const handleLogin = (req, res) => {
   return res.send({"text": "Login Success!"});
}


// app.use는 global middleware
app.use(logger);
// 서버 GET request 하기: route와 callback 함수 입력
app.get("/", handleHome);
app.get("/login", handleLogin);


// 서버(app) listening용 callback 함수 정의
const handleListening = () => console.log(`Server is listening on http://localhost:${PORT}`);

// 서버(app) listening 하기
app.listen(PORT, handleListening);
