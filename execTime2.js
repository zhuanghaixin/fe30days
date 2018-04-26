function execTime(t,callback) {
//补全代码
    setTimeout(callback,t);
    return ;

}
console.log(1);
execTime(3000,function () {
    console.log(3);
})
console.log(2)