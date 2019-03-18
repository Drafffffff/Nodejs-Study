var fs = require('fs');

var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');


//管道读写 


readerStream.pipe(writerStream);

console.log('over');