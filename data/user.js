import User from "../models/user.js";

// 사용자 검사 항목 조회
export const getUserCheckSettings = async (username) => {
    return await User.findOne({ username }, "checkCategory");
};