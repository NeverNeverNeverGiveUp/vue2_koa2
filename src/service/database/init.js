const mongoose = require("mongoose");
const db = "mongodb://localhost/myDB";
var connect = () => {
  // 链接数据库
  mongoose.connect(db,{ useNewUrlParser:true, useUnifiedTopology:true });
  // 增加数据库监听事件
  mongoose.connection.on("disconnected", () => {
    console.log("-----------------数据库断开----------------");
    mongoose.connect(db,{ useNewUrlParser:true, useUnifiedTopology:true });
  })
  // 增加数据库监听事件
  mongoose.connection.on("error", () => {
    console.log("-----------------数据库错误----------------");
    mongoose.connect(db,{ useNewUrlParser:true, useUnifiedTopology:true });
  })

  // 链接打开的生活
  mongoose.connection.on("open", () => {
    console.log("-----------------mongoose数据库链接成功----------------");
  })
};

module.exports={
    connect
}
