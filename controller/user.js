import * as userData from "../data/user.js";

// 사용자 검사 항목 설정 조회
export const getCheckSettings = async (req, res, next) => {
    try {
        const { username } = req.params;

        const user = await userData.getUserCheckSettings(username);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "해당 유저를 찾을 수 없습니다"
            });
        }

        return res.status(200).json({
            success: true,
            data: user.checkCategory
        });
    } catch (error) {
        next(error);
    }
};