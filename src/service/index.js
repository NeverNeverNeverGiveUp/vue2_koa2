const Koa=require("koa");
const app=new Koa();
const {connect}=require("./../service/database/init")
console.log("444",require("./../service/database/init"));



;(async ()=>{
    await connect();
})();
app.use(async (ctx)=>{
    ctx.body="本地服务器的输入：hello"
});
app.listen(3000,function name(params) {
    console.log("本地服务启动成功了…………");
})