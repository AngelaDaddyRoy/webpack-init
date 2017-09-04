const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./public",
        port: "9090",
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'                   
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('BioVR版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tpl.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],
}