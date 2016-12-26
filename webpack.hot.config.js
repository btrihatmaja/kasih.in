var webpack = require('webpack');
var path = require('path');
module.exports = {


  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './app/assets/frontend/index.js'
  ],
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "[name]_wp_bundle.js",
    publicPath: 'http://localhost:8080/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: [, 'babel?presets[]=es2015,presets[]=stage-1,presets[]=react'],
    }, {
      test: /\.css$/,
      loader: 'style!css?modules',
      include: /flexboxgrid/,
    }]
  }
};
