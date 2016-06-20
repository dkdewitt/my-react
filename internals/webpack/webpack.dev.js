'use-strict';

var path = require('path');
var webpack = require('webpack');
var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: true,
  __APIURL__: "'http://127.0.0.1:5000/'",
});

module.exports = {

  entry: {
    app: [
    'webpack-dev-server/client?http://127.0.0.1:8080',
      'webpack-hot-middleware/client',
      './app/app.js'
    ]
  },

  output: {
    path: './build',
    filename: '[name].js'
  },

  module: {

    loaders: [
      {
        loader: 'babel',
        test: /\.js?$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { 
        test: /\.scss$/, 
        loader: "style!css!sass?outputStyle=expanded"
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },

    ]
  },
  resolve: {
    modulesDirectories: ['app', 'node_modules', 'app/scss'],
    root: path.resolve(__dirname, './')
  },

  debug: true,

  devtool: 'eval',

  plugins: [
    definePlugin,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],


  babelQuery: {
    presets: ['react-hmre'],
  },
}