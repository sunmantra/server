const http = require('http');
const url = require('url');

http.createServer((request, response)=>{
    console.log('start Server');
    console.log(request.method);//определение метода запроса get or post
    let urlRequest = url.parse(request.url, true);
    console.log(urlRequest);
    
    
    response.end('start');
}).listen(3000);