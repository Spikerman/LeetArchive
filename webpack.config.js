//'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    watch: false,
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    entry: "./app/app.js",//已多次提及的唯一入口文件
    output: {
        path: path.join(__dirname, 'public', 'js'),//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    }
};
