var http = require('http');
var fs	= require('fs');

var requestHandler = function(request, response){
	
	//console.log(request.url);
	//console.log(request.method);
	//response.writeHead(200, {'content-type': 'text/plain'});
	//response.write('<h1>welcome to node server!</h1>');
	//response.end();

	if(request.url == "/home"){

		
		fs.createReadStream('home.html').pipe(response);

	}
	else if(request.url == "/index"){
		
		fs.createReadStream('index.html').pipe(response);

	}
	else if(request.url == "/login"){
		
		fs.createReadStream('login.html').pipe(response);

	}
	else{
		response.write('invalid request');
		response.end();
	}
}

var server = http.createServer(requestHandler);

server.listen(3000);
console.log('server started at 3000...');