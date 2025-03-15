import User from "../models/user.js";

// 사용자 검사 항목 조회
export const getUserCheckSettings = async (username) => {
	return await User.findOne({ username }, "checkCategory");
};

// 사용자 검사 항목 저장(또는 수정)
export const updateUserCheckSettings = async (username, newSettings) => {
	const user = await User.findOne({ username });

	if (!user) return null;

	// 기존 checkCategory 객체를 유지하면서 새로운 값만 업데이트
	Object.keys(newSettings).forEach((key) => {
			if (Array.isArray(newSettings[key])) {
					user.checkCategory[key] = newSettings[key];
			}
	});

	await user.save();
	return user;
};