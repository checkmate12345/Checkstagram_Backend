import express from "express";
import * as userController from "../controller/user.js";

const router = express.Router();

// 검사 항목 설정 조회
router.get("/setcheck/:username", userController.getCheckSettings);

// 검사 항목 설정
router.put("/setcheck/:username", userController.setCheckSettings)

export default router;