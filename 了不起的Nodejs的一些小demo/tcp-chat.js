var net = require("net");

//追踪连接数
var count = 0;


//创建服务器
var server = net.createServer(function (connection) {
	connection.write(`> Hi!Welcome to the tcp-chat room\n> ${count} other people in this room!\n`);
	count++;
	console.log(count);
	connection.setEncoding("utf-8");
	connection.on('close', function() {
		count--;
	});
	connection.on('data',function (data) {
		console.log(data);
	})
	console.log("new connection!");
});

//监听

server.listen(3000,function () {
	console.log("server listening on *:3000");
});

