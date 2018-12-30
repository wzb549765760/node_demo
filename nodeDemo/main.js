var fs = require('fs');
var data=fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行阻赛代码结束!");

var fs1=require('fs');
fs1.readFile('input.txt',function(err,data1){
	console.log(err);
	if (err) return console.error(err);
    console.log(data1.toString());
})

console.log("程序执行非阻赛代码结束!");



