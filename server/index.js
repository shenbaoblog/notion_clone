const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 5555;
require("dotenv").config();

// DB接続
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("DB接続成功");
} catch (error) {
  console.error(error);
}

// ユーザー新規登録API

// ユーザーログイン用API

app.listen(PORT, () => {
  console.log(`ロカルサーバー起動中・・・`);
});
