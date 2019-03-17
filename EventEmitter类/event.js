var events = require("events");

var event = new events.EventEmitter();

event.on('timeout',function(){
    console.log("成功执行");
});

setTimeout(function(){event.emit('timeout');},1000);