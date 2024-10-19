const mongoose = require("mongoose");

// userSchemaの作成
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Userモデルの作成
module.exports = mongoose.model("User", userSchema);
