import * as feedData from "../data/feeds.js";
import * as authData from "../data/auth.js";

// 피드 조회
export async function getFeeds(req, res, next) {
  try {
    const feeds = await feedData.getFeeds();

    res.status(200).json({
      success: true,
      data: feeds.map(feed => ({
        username: feed.user.username,
        profileImage: feed.user.profileImage,
        medias: feed.medias,
        description: feed.description,
        likes: feed.likes,
        comments: feed.comments,
        createdAt: feed.createdAt,
        updatedAt: feed.updatedAt
      }))
    });
  } catch (error) {
    next(error);
  }
}

// 피드 업로드
export async function uploadFeed(req, res, next) {
  const { username } = req.params;
  const { description } = req.body;

  try {
    const user = await authData.findByUsername(username);
    if (!user) {
      return res.status(404).json({ success: false, message: "해당 유저를 찾을 수 없습니다" });
    }

    if (!req.awsUploadPaths || req.awsUploadPaths.length === 0) {
      return res.status(400).json({ success: false, message: "사진 또는 동영상을 첨부해 주세요" });
    }

    const newFeed = await feedData.createFeed({
      user: user._id,
      medias: req.awsUploadPaths,
      description
    });

    res.status(200).json({ success: true, message: "피드 업로드에 성공했습니다" });

  } catch (error) {
    next(error);
  }
}