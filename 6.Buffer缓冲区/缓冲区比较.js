var buf1 = new Buffer('ABC');
var buf2 = new Buffer('ABCD');
result = buf1.compare(buf2);


if (result < 0) {
    console.log(buf1 + 'zai' + buf2 + "zhiqian");
} else if (result == 0) {
    console.log(buf1 + 'zai' + buf2 + "xiangtong");
} else {
    console.log(buf1 + 'zai' + buf2 + "zhihou");

}


