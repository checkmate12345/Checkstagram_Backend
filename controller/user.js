import * as userData from "../data/user.js";

// 특정 사용자 검사 항목 설정 조회
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

// 특정 사용자 검사 항목 저장(또는 수정)
export const setCheckSettings = async (req, res, next) => {
  try {
    const { username } = req.params;
    const { risk, brand, it, coke } = req.body;

    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "요청 데이터가 올바르지 않습니다"
      });
    }

    const updatedUser = await userData.updateUserCheckSettings(username, {
      risk,
      brand,
      it,
      coke
    });

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "해당 유저를 찾을 수 없습니다"
      });
    }

    return res.status(200).json({
      success: true,
      message: "설정이 성공적으로 저장되었습니다"
    });
  } catch (error) {
    next(error);
  }
};