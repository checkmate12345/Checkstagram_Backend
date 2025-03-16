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

// 피드 저장
export async function createFeed(feedData) {
  try {
    const newFeed = new Feed(feedData);
    return await newFeed.save();
  } catch (error) {
    throw error;
  }
}