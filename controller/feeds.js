import * as feedData from "../data/feeds.js";

// 피드 조회 API
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
