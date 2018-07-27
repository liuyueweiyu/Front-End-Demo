var path = require("path");
var htmlwebpackplugin = require("html-webpack-plugin");

const dev = Boolean(process.env.WEBPACK_SERVE);

module.exports = {
    
    entry:{     //多入门配置
        // main: ["./src/script/index.js", 'webpack-dev-server/client?http://localhost:8080/']
        index:["./src/index.js"]
        // a: "./src/script/a.js",
        // b: "./src/script/b.js",
        // c: "./src/script/c.js",
    },
    output:{
        path:path.resolve(__dirname, 'dist'),   //出口文件配置
        filename:"js/[name].bundle.js"
    },
    module:{
        rules:[
               {
                   test: /\.js$/,
                   exclude: path.resolve(__dirname, "node_modules"),
                   include: path.resolve(__dirname,"src"),
                   loader: "babel-loader",
                   query:{  //babel参数配置
                       "presets": ["env","react"]
                   }
               },
               {
                   test:/\.css$/,
                   loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
               },
               {
                   test:/\.scss$/,
                   loader: 'style-loader!css-loader!postcss-loader!sass-loader'
               },
               {
                   test:/\.html$/,
                   loader:'html-loader'
               },
               {
                   test:/\.(jpg|png|gif|svg)$/i,
                   loader:'url-loader',
                   query:{
                       limit:1024,
                       name:'[name]-[hash:5].[ext]',
                       outputPath: 'images/'
                   }
               }
        ]
    },
    plugins:[       //生成多个html即在数组多配置即可
        new htmlwebpackplugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index'],
        }),
        // new webpack.HotModuleReplacementPlugin()
    ],
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8080,
        // host: '127.0.0.0',
        // inline: true,
        // hot: true
        // historyApiFallback: {
        //     rewrites: [{
        //         from: /./,
        //         to: '/404.html'
        //     }]
        // }
        overlay: true,   //这个配置属性用来在编译出错的时候，在浏览器页面上显示错误
        // stats: "errors-only", //这个配置属性用来控制编译的时候shell上的输出内容
        // devServer:compress   //这是一个布尔型的值，当它被设置为true的时候对所有的服务器资源采用gzip压缩
    },
    // performance: {
    //     hints: dev ? 'warning': false
    //     // hints:false
    // }
}