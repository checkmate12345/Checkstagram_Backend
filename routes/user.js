import express from "express";
import * as userController from "../controller/user.js";

const router = express.Router();

// 검사 항목 설정 조회
router.get("/setcheck/:username", userController.getCheckSettings);

export default router;