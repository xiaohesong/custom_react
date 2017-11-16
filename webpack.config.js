var webpack = require('webpack');
var path = require('path')
//__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
module.exports = {
    entry: ['webpack/hot/dev-server', __dirname + "/index.js"],
    output: {
        path: __dirname + "/build",
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/, // test 匹配js和jsx）
                exclude: /node_modules/, //屏蔽不需要处理的文件
                loader: 'babel-loader',
                query: {
                    "presets": [
                        "react",
                        "es2015",
                        "stage-0"
                    ],
                    plugins: [
                        ["import", {
                            libraryName: "antd",
                            style: "css"
                        }],
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?importLoaders=1',
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), //热模块替换插件
    ],
    devServer: {
        contentBase: path.join(__dirname, "/public"),
        historyApiFallback: true,
        inline: true,
        port: 3008,
        compress: true,
        progress: true,
    },
    performance: {
        hints: "warning"
    }, //Show warning if the size of js file > 250KB, type: false | warning | error
};
