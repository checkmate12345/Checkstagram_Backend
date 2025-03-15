import * as authData from "../data/auth.js"

// 유저 로그인
export async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "username과 password를 모두 입력해주세요",
      });
    }

    const user = await authData.findByUsername(username);
    
    if (!user || user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "입력하신 정보가 올바르지 않습니다",
      });
    }

    res.status(200).json({
      success: true,
      message: "로그인 성공",
      data: { username: user.username },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "서버 오류가 발생했습니다",
    });
  }
}