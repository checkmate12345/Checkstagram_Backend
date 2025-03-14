import mongoose from "mongoose";
import { config } from "./config.js"

export async function connectDB() {
  try {
    await mongoose.connect(config.db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB 연결 성공");
  } catch (error) {
    console.log("MongoDB 연결 실패: ", error);
    throw error;
  }
}