var buf1 = new Buffer('dra');
var buf2 = new Buffer('fffffff');
var buf3 = Buffer.concat([buf1,buf2]);

console.log(buf3.toString());