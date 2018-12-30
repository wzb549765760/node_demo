//写入流
		var fs=require('fs');
		var data='吴志斌  wuzhibin';
		//创建一个写入的流，写到文件中
		var writer=fs.createWriteStream('input.txt');
		//设置utf8编码写入数据
		writer.write(data,'UTF8');
		//标记文件末尾
		writer.end();
		//处理事件流
		writer.on('finish',function(){
			console.log('写入完成');
		});
		writer.on('error',function(err){
			console.log(err.stack);
		});
		console.log('执行完毕');