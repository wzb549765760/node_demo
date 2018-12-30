var fs=require('fs');
		var data='';
		//创建可读流
		var readStrean=fs.createReadStream('input.txt');
		//设置编码utf8
		readStrean.setEncoding('UTF8');
		//处理事件流
		readStrean.on('data',function(chunk){
			data+=chunk
		});
		readStrean.on('end',function(){
			console.log(data);
		});
		readStrean.on('error',function(err){
			console.log(err.stack);
		});
		console.log('end');