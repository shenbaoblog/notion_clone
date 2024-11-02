const CryptoJS = require("crypto-js");
const JWT = require("jsonwebtoken");
const User = require("../models/user");

exports.register = async (req, res) => {
  // パスワードの受け取り
  const password = req.body.password;

  try {
    console.log("暗号化前");
    // パスワード暗号化
    req.body.password = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY);
    console.log("パスワード暗号化成功");
    // ユーザーの新規登録
    const user = await User.create(req.body);
    console.log("ユーザー新規登録成功");
    // JWTの発行
    const token = JWT.sign({ id: user._id }, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "24h",
    });
    return res.status(200).json({ user, token });
  } catch (err) {
    return res.status(500).json(err);
  }
};

// ユーザーログイン用API
