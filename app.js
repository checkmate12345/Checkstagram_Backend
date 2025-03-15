import express from "express";
import cors from "cors";
import { connectDB } from "./config/database.js";
import { config } from "./config/config.js";
import errorHandler from "./middlewares/errorHandler.js";
import authRouter from "./routes/auth.js";
import feedRouter from "./routes/feeds.js";
import userRouter from "./routes/user.js";

const app = express();

app.use(cors());
app.use(express.json());

// 테스트용
app.get("/test", (req, res) => {
  res.json({ message: "was 연결 테스트 성공" });
});

// 라우터
app.use("/auth", authRouter);
app.use("/feeds", feedRouter);
app.use("/user", userRouter);

// 에러
app.use(errorHandler);

const port = config.hosting.back_port;

connectDB()
  .then(() => {
    app.listen(port, () =>
      console.log(`서버 실행 중, 포트 번호: ${port}`)
    );
  })
  .catch((error) => {
    console.error("서버 실행 중 오류 발생: ", error);
    process.exit(1);
  });