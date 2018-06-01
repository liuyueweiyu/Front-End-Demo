let net = require("net");

//追踪连接数
let count = 0,
    users = {};


//创建服务器
let server = net.createServer(function (connection) {		//每次连接创建一个connection
    connection.write("> Hi!Welcome to the tcp-chat room\r\n> "+count+" other people in this room!\r\n");
    connection.write("> Please enter your name:\r\n");
    connection.setEncoding("utf8");
    connection.on('close', function() {
        count--;
    });
    let str = "";
    let nickname;
    connection.on('data',function (data) {
        if(data != "\n" && data != "\r" && data != "\r\n"){
            str += data;
        }
        else{
            let message = "";
            if (nickname === undefined){  //输入昵称
                nickname = str;
                users[nickname] = connection;		//用户连接存储至users对象中
                message = "> "+nickname+" enter the chat room.\r\n";
            }
            else{   //发送消息
                message = "> "+nickname+": "+str + "\r\n";
            }
            for (let i in users){
                users[i].write(message);
            }
            str = ""
        }

    });
    console.log("new connection!");
});

//监听
server.listen(3000,function () {
    console.log("server listening on *:3000");
});
