var root = process.cwd();
//fs是唯一一个同时提供异步同步API的模块

var fs = require("fs"),
    stdin = process.stdin,
    stdout = process.stdout;
// console.log(fs.readdirSync("."));	//同步写法
//fs.readdir(".", (err,files)=>console.log(files));	//异步写法

//console.log内部：它在指定的字符串之后加了"\n"之后，并将其写入stdout流中

function read(path) {
    // console.trace();
	fs.readdir(path, (err,files)=>{
	    console.log("");
	    if(!files.length){
	        console.log("there is no files");
	    }
	    else{
	        let allpromise = [];
	        let stats = [];
	        function file(i) {
	            let filename = files[i];
	            let promise = new Promise((resolve,reject)=>{
	                fs.stat(path+"/"+filename,(err,stat)=>{
	                    if(stat.isDirectory()){
	                        console.log(i+"\tDir:\t"+filename);
	                    }
	                    else{
	                        console.log(i+"\tFile:\t"+filename);
	                    }
	                    resolve();
	                    stats[i-1] = stat;
	                });
	            });
	            allpromise.push(promise);
	            if(++i != files.length){
	                file(i);
	            }
	        }
	        file(0);

	        Promise.all(allpromise)
	        .then(()=>{
				return new Promise((resolve,reject)=>{
					stdout.write("\nplease enter your choice:");
					stdin.setEncoding("utf-8");
					stdin.resume();
					function dataListener(data){
                        data = data.slice(0,data.length-1);

                        if(!files[data] && data != files.length){
                            stdout.write("\nplease enter your choice:");
                        }
                        else{
                            stdin.pause();
                            stdin.removeListener("data",dataListener);
                            resolve(data-1);

                        }
					}
					stdin.on("data",dataListener);
				});

	        })
	        .then((value)=>{
	        	console.log("a");
			    if(stats[value].isDirectory()){
			    	// read(path + "/" + files[value]);
			   		return read(path + "/" + files[value]);
			   	}
			   	else{
			   		fs.readFile(path + "/" + files[value],"utf-8",(err,data)=>{
		    			console.log(data);
		    			return read(path);
		    			// read(path);
		    		});
		    	}
			});
	    }
	
	});
}

read(root);

//CLI
// 1.argv
//process.argv包含了所有Node程序运行时的参数值：
//node .\test.js --c
//[ 'D:\\nodejs\\node.exe',
//'C:\\Users\\Username\\Desktop\\file-exploer\\test.js',
//'--c' ]
//第一个元素始终是node，第二个是执行文件的路径，第三个开始才是运行参数
//console.log(process.argv.slice(2));	//获取运行参数

// 2.process.cwd()获取工作目录
//	 process.chdir()更改工作目录
// console.log(process.cwd());//C:\Users\Username\Desktop\file-exploer
// process.chdir("../");
// console.log(process.cwd());	//C:\Users\Username\Desktop

// 3.环境变量
// console.log(process.env);

// 4. 退出
// process.exit(1);	//发生错误时最好使用退出代码1

// 5. Stream
// 文件流读取

// 6. 监视
// 
// fs.watch(),fs.watchFile() 监视文件，目录
