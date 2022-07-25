import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

// PORT 정의
const PORT = 4000;

// 서버(app) listening용 callback 함수 정의
const handleListening = () => console.log(`Server is listening on http://localhost:${PORT}`);

// 서버(app) listening 하기
app.listen(PORT, handleListening);
