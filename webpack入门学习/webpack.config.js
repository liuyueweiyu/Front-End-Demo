var path = require("path");
var htmlwebpackplugin = require("html-webpack-plugin");

module.exports = {
    entry:{     //多入门配置
        main:"./src/script/main.js",
        a: "./src/script/a.js",
        b: "./src/script/b.js",
        c: "./src/script/c.js",
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
                       "presets": ["env"]
                   }
               },
               {
                   test:/\.css$/,
                   loader:'style-loader!css-loader?importLoaders=1!postcss-loader'
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
                       limit:200000,
                       name:'[name]-[hash:5].[ext]',
                       outputPath: 'images/'
                   }
               }
        ]
    },
    plugins:[       //生成多个html即在数组多配置即可
        new htmlwebpackplugin({
            filename: 'index.html',
            template: 'index.html',
            chunks: ['main'],
        })
    ],
    mode: 'production'
}