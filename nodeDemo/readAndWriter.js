//管道流
		var fs=require('fs');
		var reader = fs.createReadStream('output.txt');
		var write=fs.createWriteStream('input.txt');
		reader.pipe(write);