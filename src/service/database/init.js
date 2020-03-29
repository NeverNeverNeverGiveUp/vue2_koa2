const mongoose = require("mongoose");
const db = "mongodb://localhost/smile-db";
var connect = () => {

  return new Promise((res, rej) => {
    //   连接次数
    let maxConnectTimes = 0;
    // 链接数据库
    mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    // 增加数据库监听事件：监听断开连接
    mongoose.connection.on("disconnected", () => {
      // 监听断开连接
      maxConnectTimes++;
      if (maxConnectTimes <= 3) {
        console.log("-----------------数据库断开----------------", `第${maxConnectTimes}次重连接`);
        mongoose.connect(db, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
      } else {
        console.error("数据库出现问题，程序无法搞定，请人为修理");
        rej();

      }

    })
    // 增加数据库监听事件
    mongoose.connection.on("error", (err) => {
      maxConnectTimes++;
      if (maxConnectTimes <= 3) {
        console.log("-----------------数据库错误----------------", `第${maxConnectTimes}次重连接`);
        mongoose.connect(db, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
      } else {
        console.error("数据库出现问题，程序无法搞定，请人为修理");
        rej('err');

      }
    })

    // 链接打开的生活
    mongoose.connection.once("open", () => {
      console.log("-----------------mongoose数据库链接成功----------------");
      res();
    })


  })


};

module.exports = {
  connect
}
