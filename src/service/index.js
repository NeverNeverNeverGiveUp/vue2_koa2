const Koa=require("koa");
const app=new Koa();
app.use(async (ctx)=>{
    ctx.body="本地服务器的输入：hello"
});
app.listen(3000,function name(params) {
    console.log("本地服务启动成功了…………");
    
})