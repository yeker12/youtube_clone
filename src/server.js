import express from "express";

// PORT 정의
const PORT = 4000;
// 서버(app) 만들기: express 함수 호출로 가능
const app = express();

// middleware 정의
const logger = (req, res, next) => {
   console.log(`${req.method}: ${req.url}`);
   next();
}

// 서버(app) GET request용 callback 함수 정의
const handleHome = (req, res) => {
   // 빈 화면으로 끝내기
   // return res.end
   // 화면에 글씨 보내기
   return res.send("<h1>I still love you!</h1>"); 
}

// global middleware 정의
const privateMiddleware = (req, res, next) => {
   const url = req.url;
   if(url === "/protected"){
      res.send("<h1>Not allowed!❌</h1>");
   }
   next();
}
// object도 전송 가능
const handleLogin = (req, res) => {
   return res.send({"text": "Login Success!"});
}
// privateMiddleware로 인해 실행 불가
const handleProtected = (req, res) => {
   return res.send("This is private Lounge!");
}

// app.use는 global middleware를 제공
app.use(logger);
app.use(privateMiddleware);

// 서버 GET request 하기: route와 callback 함수 입력
app.get("/", handleHome);
// protected 접속했으나, 위에서 global middleware에서 막힘 (privateMiddleware)
app.get("/protected", handleProtected);
app.get("/login", handleLogin);


// 서버(app) listening용 callback 함수 정의
const handleListening = () => console.log(`Server is listening on http://localhost:${PORT}`);

// 서버(app) listening 하기
app.listen(PORT, handleListening);
