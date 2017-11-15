var webpack = require('webpack');
var path = require('path')
//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
    entry: ['webpack/hot/dev-server', "webpack-dev-server/client?http://localhost:3008", __dirname + "/index.js"],
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
        publicPath: "/build"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, // test 匹配js和jsx）
                exclude: /node_modules/, //屏蔽不需要处理的文件
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() //热模块替换插件
    ],
    devServer: {
        contentBase: path.join(__dirname, "/public"),
        historyApiFallback: true,
        inline: true,
        port: 3008,
        compress: true
    }
};