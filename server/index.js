const express = require("express");
const app = express();
const PORT = 5555;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(PORT, () => {
  console.log(`ロカルサーバー起動中・・・`);
});
