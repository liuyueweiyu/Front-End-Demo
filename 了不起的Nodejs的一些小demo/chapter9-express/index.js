/**
 * 模块依赖
 */
const express = require("express"),
      morgan = require("morgan"),
      bodyParser = require("body-parser"),
      fs = require("fs"),
      multer = require('multer'),
      cookieParser = require('cookie-parser'),
      util = require('util');

const app = express(),
      upload = multer({ dest: '/tmp/'});

app
    /**
     * 设置中间件
     */
    .use(morgan('short'))                   //日志
    .use(express.static('./public/'))       //设置静态文件
    .use(bodyParser.urlencoded({extended:false}))       // 创建 application/x-www-form-urlencoded 编码解析
    .use(upload.array('fileup',12))         //图片上传，并设置最大上传数量为12，单个文件用single
    .use(cookieParser())


    /**
     * 分发路由
     */
    .get('/',function (req,res) {           
        res.sendfile('./index.html');
    })
    .post('/fileup', function (req, res) {  //文件上传
        const errorArr = [];
              len = req.files.length;
        for (let i = 0; i < len; i++) {
            fs.readFile(req.files[i].path, function (err, data) {
                fs.writeFile(__dirname + '/' + req.files[i].path + '.' + req.files[i].originalname.split('.')[1], data, function (err) {
                    if (err) {
                        errorArr.push(req.files[i].originalname + 'upload failed!');
                    }
                });
            });
        }
        if (errorArr.length){
            res.send(errorArr);
        }
        else
            res.send('upload successfully!');
    })
    .post('/cookies',function (req,res) {   //cookie
        res.send(req.cookies);
        res.send(util.inspect(req.cookies));
    })
    .listen(8080);