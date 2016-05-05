var webpack = require('webpack');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }
    return sources;
}

module.exports = {
  entry: {
    app: getEntrySources([
      './src/index.js'
    ])
  },
  module: {
    loaders: [
      { test: /\.css$/,
        loader: 'style!css' },
      { test: /\.scss?$/,
        loader: 'style!css!sass' },
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel' },
      { test: /\.js?$/,
        exclude: /node_modules/,
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