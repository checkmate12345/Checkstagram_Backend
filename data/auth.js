import User from "../models/user.js";

// 유저 이메일로 조회
export async function findByUsername(username) {
  const user = await User.findOne({ username });
  return user;
}