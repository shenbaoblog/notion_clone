const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 5555;
require("dotenv").config();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json()); // jsonオブジェクトを認識できるようにするための設定
app.use("/api/v1", require("./src/v1/routes"));

// DB接続
try {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("DB接続成功");
} catch (error) {
  console.error(error);
}

app.listen(PORT, () => {
  console.log(`ローカルサーバー起動中・・・`);
});
