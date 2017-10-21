const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}