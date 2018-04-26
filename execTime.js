function execTime(t) {
//补全代码
// setTimeout(()=>{
//     console.log("过一会儿执行");
// },t);
   console.time('timer');
   let startTime=(new Date()).getTime();
   while(new Date()-startTime<=t){
       //什么也不做
   }
    console.timeEnd('timer');
   return ;
}
console.log(1) //输出1
execTime(3000) //运行3秒钟
console.log(2) //3秒后输出2