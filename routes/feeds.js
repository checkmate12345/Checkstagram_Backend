import express from "express";
import * as feedController from "../controller/feeds.js";

const router = express.Router();

// 피드 조회
router.get("/", feedController.getFeeds);

export default router;