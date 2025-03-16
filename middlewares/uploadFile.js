import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { config } from "../config/config.js";

// AWS S3 클라이언트 설정 (AWS SDK v3 방식)
const s3Client = new S3Client({
  region: config.aws.bucket_region,
  credentials: {
    accessKeyId: config.aws.access_key,
    secretAccessKey: config.aws.secret_key,
  }
});

// Multer 설정 (메모리 저장 방식)
const storage = multer.memoryStorage();
const upload = multer({ storage }).array("medias", 10);

// S3 업로드 미들웨어
export const aws_s3_upload = async (req, res, next) => {
  upload(req, res, async (err) => {
    // Multer 파일 에러 처리
    if (err) {
      console.error("Multer Error:", err);
      return res.status(400).json({ success: false, message: "Multer 파일 업로드 실패" });
    }

    // 파일이 없을 경우
    if (!req.files || req.files.length === 0) {
      console.error("No file uploaded in multer");
      return res.status(400).json({ success: false, message: "파일이 없습니다." });
    }

    try {
      // 업로드된 모든 파일을 S3로 업로드
      const uploadedFiles = await Promise.all(
        req.files.map(async (file) => {
          const fileKey = `${config.aws.bucket_directory}/${uuidv4()}-${file.originalname}`;
          const uploadParams = {
            Bucket: config.aws.bucket_name,
            Key: fileKey,
            Body: file.buffer,
            ContentType: file.mimetype
          };

          await s3Client.send(new PutObjectCommand(uploadParams));
          return {
            mediaUrl: `https://${config.aws.bucket_name}.s3.${config.aws.bucket_region}.amazonaws.com/${fileKey}`,
            mediaType: file.mimetype.startsWith("image") ? "image" : "video" // 이미지 or 비디오 판별
          };
        })
      );

      // S3 업로드된 파일 URL을 요청 객체에 저장
      req.awsUploadPaths = uploadedFiles;
      console.log("S3 업로드 성공:", req.awsUploadPaths);

      next(); // 다음 미들웨어로 이동
    } catch (error) {
      console.error("S3 Upload Error:", error);
      return res.status(500).json({ success: false, message: "S3 업로드 실패" });
    }
  });
};