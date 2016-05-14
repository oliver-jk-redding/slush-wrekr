const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    proxy: [{
      path: '/*',
      target: 'http://localhost:3000'
    }],
    contentBase: './public',
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      { test: /\.css$/,
        loader: 'style!css' },
      { test: /\.scss?$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'public', 'styles') },
      { test: /\.js?$/,
        loader: 'react-hot!babel',
        exclude: /node_modules/ },
      { test: /\.jsx?$/,
        loader: 'react-hot!babel',
        exclude: /node_modules/ },
      { test: /\.png$/,
        loader: 'file' },
      { test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file' }
    ]
  }
};