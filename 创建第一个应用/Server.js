var http = require('http');

http.createServer(function(require,response){
//发送HTTP头部
//http状态值：200：OK
//内容类型：text/plain
response.writeHead(200,{'Content-Type':'text/plain'});
//发送响应数据
response.end('Hello World\n');

}).listen(8888);

console.log("Server running at http://127.0.0.1:8888/");