var path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
})

var SRC_DIR = path.resolve('src');
var config = {
    entry: "./src/app/index.js",
    output: {
        path: path.resolve('dist/app'),
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            { test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
              },
              {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['react']
                }
              },
              {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ['react']
                }
              }
        ]
    },
    plugins: [HtmlWebpackPluginConfig],
    devServer: {
        contentBase: "./src",
        open: true
    }
}

module.exports = config