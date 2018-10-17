const express = require('express'),
      fs = require('fs');

const app = express();

//添加的新用户数据
const user = {
    "user4": {
        "name": "mohit",
        "password": "password4",
        "profession": "teacher",
        "id": 4
    }
}


app
    .get('/',function (req,res) {
        fs.readFile(__dirname + '/users.json','utf8',function (err,data) {
            res.send(data);
        })
    })
    .get('/:id',function (req,res) {    //显示用户详细信息
        fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
            data = JSON.parse(data);
            console.log(req.params);
            var user = data["user" + req.params.id]
            res.end(JSON.stringify(user));
        });
    })
    .get('/addUsers',function (req,res) {       //添加用户
        fs.readFile(__dirname + '/users.json','utf8',function (err,data) {
            data = JSON.parse(data);
            data["user4"] = user["user4"];
            
            fs.writeFile(__dirname + '/users.json', JSON.stringify(data), function (err) {
                if(err)
                    res.send('add failed!');
                else
                    res.send(data);
            });
        })
    })
    .get('/deleteUsers',function (req,res) {    //删除用户
        fs.readFile(__dirname + '/users.json', 'utf8', function (err, data) {
            data = JSON.parse(data);
            delete data[`user${req.query.id}`];
            fs.writeFile(__dirname + '/users.json', JSON.stringify(data), function (err) {
                if (err)
                    res.send('delete failed!');
                else
                    res.send(data);
            });
        })
    })

    .listen(3000);