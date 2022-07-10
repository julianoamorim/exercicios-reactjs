const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
    filename: 'bundler.js',
    path: path.resolve(__dirname, 'dist'),
  },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, //plugin para interpretar os arq JS
                exclude: /nodemodules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
         template: './public/index.html',
         filename: './index.html'
        })
    ]
};