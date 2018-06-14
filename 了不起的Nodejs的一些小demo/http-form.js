let http = require("http");
let htmlurl = "./html/http-form.html";


//每请求一个文件就会建立一次连接，其url储存在request.url

http.createServer(function (request,response) {

    if('/' ==  request.url){
        response.writeHead(200,{"Content-Type":"text/html"});
        require("fs").createReadStream(htmlurl).pipe(response);
    }
    else if ('/url' == request.url && 'POST' == request.method){
        let body;
        request.on('data',function (chunk) {
            body += chunk;
        });
        request.on('end',function () {
            response.writeHead(200,{"Content-Type":"text/html"});
            response.end(`<p>Content-Type:${request.headers['content-type']}</p><p>Data:${body}</p>`);

        });

    }
    else{
        response.writeHead(404,{"Content-Type":"text/html"});
        response.end(`<h1>Page Not Found</h1>`);
    }

}).listen(3000);

