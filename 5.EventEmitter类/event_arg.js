var events = require("events");
var Emitter = new events.EventEmitter();
Emitter.on("something", function(x, y) {
    console.log("listener1",x,y);
});

Emitter.on("something",function(x,y){
    console.log("listener2",x,y);
});
Emitter.emit('something','ss','ss');