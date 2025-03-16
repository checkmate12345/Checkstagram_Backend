import express from "express";
import * as feedController from "../controller/feeds.js";
import { aws_s3_upload } from "../middlewares/uploadFile.js";

const router = express.Router();

// 피드 조회
router.get("/", feedController.getFeeds);

// 피드 업로드
router.post("/:username", aws_s3_upload, feedController.uploadFeed);

export default router;