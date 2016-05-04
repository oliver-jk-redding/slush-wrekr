var webpack = require('webpack');
var path = require('path')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  module: {
    loaders: [
      { test: /\.css$/,
        loader: 'style!css' },
      { test: /\.scss?$/,
        include: path.join(__dirname, 'css'),
        loader: 'style!css!sass' },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '/'),
        loader: 'react-hot!babel' },
      { test: /\.js?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '/'),
        loader: 'react-hot!babel' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};