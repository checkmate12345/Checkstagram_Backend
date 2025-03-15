import Feed from "../models/feed.js";

// 피드 조회
export async function getFeeds() {
  try {
    const feeds = await Feed.find()
      .populate("user", "username profileImage")
      .sort({ createdAt: -1 })
      .lean();

    return feeds;
  } catch (error) {
    next(error);
  }
}
