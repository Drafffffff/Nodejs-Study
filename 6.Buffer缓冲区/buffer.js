//创建BUffer实例

var buf1 = new Buffer(10);

var buf2 = new Buffer([10,20,30,40,50]);

var buf3 = new Buffer("drafffffffffff","utf-8");


var buf4 = new Buffer(256);

len = buf4.write("sdfsdfsdfsdfsdf");

console.log("写入的字节数："+len);
