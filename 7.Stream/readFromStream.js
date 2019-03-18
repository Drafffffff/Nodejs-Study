var fs = require("fs");

var data =  '';

//创建可读流
var readerSteam = fs.createReadStream('input.txt');


//设置编码为uft-8

readerSteam.setEncoding('UTF8');

//处理流事件--> data ,end ,and error
readerSteam.on('data',function(chunk){
    data += chunk;
})

readerSteam.on('end',function(){
    console.log(data);
})

readerSteam.on('error',function(err){
    console.log(err.stack);
})

console.log("程序执行完毕");