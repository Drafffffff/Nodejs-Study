var express = require("express");
var app = express();
var bodyParser = require('body-parser');

//创建application/x-www-urlencoded编码解析器
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname+"/"+'index.htm');
})

app.post('/process_post',urlencodedParser,function(req,res){
    response={
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081,function(){
    console.log("http://localhost:8081/index2.htm");
})