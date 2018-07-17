var http = require('http'); 
		var querystring = require('querystring'); 
		var fs = require('fs');
		var path = require('path');
		var postData = querystring.stringify({
			"lan":"zh",
			"ie":"UTF-8",
			"vol": 15,
			"pit":15,
			"per":4,
			"spd":9,
			"text":"扫码出错"
		});
		var options = {
			"method":"GET",
			"hostname":"tts.baidu.com",
			"path":"/text2audio?"  + postData
		};
		var req = http.request(options,function(res){
			var chunks = [];
			res.on("data",function(chunk){
				chunks.push(chunk);
			});
			res.on("end",function(){
				var body = Buffer.concat(chunks);
				var filePath = path.normalize('err5.mp3');
				fs.writeFileSync(filePath,body);
			});
		});
		req.end();