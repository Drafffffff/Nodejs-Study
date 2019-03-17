//引入event模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new event.eventEmitter();

//绑定事件及事件处理函数
eventEmitter.on('eventName',eventHandler);

//触发事件
eventEmitter.emit('eventName');