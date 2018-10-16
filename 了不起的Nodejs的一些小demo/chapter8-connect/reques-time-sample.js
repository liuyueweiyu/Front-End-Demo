/**
 * 模块依赖
 */
const connect = require('connect'),
      http = require('http'),
      fs = require('fs'),
      time = require('./reques-time.js');

const server = connect();
server.use(function (req,res,next) {
    time({
        time: 500
    });
    next();
});
/**
 * 快速响应
 */
server.use(function (req,res,next) {
    if('/a' == req.url){
        res.writeHead(200);
        res.end('Fast!');
    }
    else
        next();
});
/**
 * 慢速响应
 */
server.use(function (req,res,next) {
    if('/b' == req.url){
        setTimeout(function () {
            res.writeHead(200);
            res.end('Slow!');
        },1000);
    }
    else
        next();
});

http.createServer(server).listen(3000);
