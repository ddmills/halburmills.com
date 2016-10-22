const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  // entry: './source/js/main.js',
  entry: ['./source/js/main.js', 'file?name=index.html!pug-html!./source/index.pug'],
  output: {
    path: './build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      // {
      //   test: /\.pug$/,
      //   loader: 'pug-static',
      // },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'file'
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'source/index.pug'
  //   })
  // ]
}