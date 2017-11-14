var webpack = require('webpack');
//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
    entry: ['webpack/hot/dev-server', __dirname + "/index.js"],
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
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
        contentBase: './build',
        // colors: true,
        historyApiFallback: true,
        inline: true,
        port: 8080,
    // process: true,
    }
};
