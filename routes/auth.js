import express from "express";
import * as authController from "../controller/auth.js";

const router = express.Router();

// 사용자 로그인
router.post("/login", authController.login);

export default router;