var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.htm");
});


app.get('/process_get', function (req, res) {
    response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8081,function(){
    console.log("http://localhost:8081/index.htm");
})