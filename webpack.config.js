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
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
              },
              {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
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