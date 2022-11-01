const http = require("http");

http.createServer((req, res)=>{
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end("Hello from nodeJS");
}).listen(5000);
