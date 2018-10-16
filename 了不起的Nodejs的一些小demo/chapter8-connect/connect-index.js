const connect = require('connect');
const http = require('http');
const fs = require('fs');
/**
 * 创建服务器
 */
const server = connect();

/**
 * 处理静态文件
 */
server.use(function (req, res, next) {
    //记录日志
    console.error(' %s %s', req.method, req.url);
    next();
});
server.use(function (req, res, next) {
    if ('GET' == req.method && '/images' == req.url.substr(0, 7)) {
        //托管图片
        serve(__dirname + req.url, 'application/jpg', res);
    } else {
        //交给其他中间件处理
        next();
    }
});
server.use(function (req, res, next) {
    if ('GET' == req.method && '/' == req.url) {
        //响应html文件
        serve(__dirname + '/index.html', 'text/html', res);
    } else {
        //交给其他中间件处理
        next();
    }
})
server.use(function (req, res, next) {
    //最后一个中间件。如果到了这里，就意味着无能为力，只能返回404
    res.writeHead(404);
    res.end('Not Found');
})
/**
 * 监听
 */
http.createServer(server).listen(3000);


function serve(path, type, response) {
    response.writeHead(200, {
        'Content-Type': type
    });
    fs.createReadStream(path).pipe(response);
}