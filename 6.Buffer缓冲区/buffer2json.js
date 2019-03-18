var buf = new Buffer('draffffff');
var json = buf.toJSON(buf);

console.log(json.data);