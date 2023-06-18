const http = require('http');
const url = require('url');
const PORT=3000;
http.createServer((req, res)=>{
    console.log('start Server');
    console.log(req.method);//определение метода запроса get or post
    let urlRequest = url.parse(req.url, true);
    console.log(urlRequest);
    
    res.write('staaaart');
    res.end();
}).listen(PORT);