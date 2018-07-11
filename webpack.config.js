var path = require('path');
var nodeExternals = require('webpack-node-externals');
const webpack = require("webpack");
const StartServerPlugin = require('start-server-webpack-plugin');

const JSrule = {
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader'
    }
  ]
};

module.exports = {
  entry: [
    'webpack/hot/poll?1000',
    './src/server/server.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
  mode: 'development',
  watch: true,
  module: {
    rules: [JSrule]
  },
  plugins: [
    new StartServerPlugin('bundle.js'),
    new webpack.HotModuleReplacementPlugin(),
  ]
};