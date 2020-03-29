const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;
// 创建UserSchema
const userSchema = new Schema({
  UserId: ObjectId,
  userName: {
    unique: true,   //是否不能重复
    type: String
  },
  passWord: String,
  createAt: {
    type: Date,
    default: Date.now()
  },
  lastLoginAt: {
    type: Date,
    default: Date.now()
  }
})

// 发布模型
mongoose.model("User",userSchema) 