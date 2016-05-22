'use-strict';

var path = require('path');
var webpack = require('webpack');
var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: true,
  __APIURL__: "'http://192.168.2.7:6543/'",
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

    ]
  },
  resolve: {
    modulesDirectories: ['app', 'node_modules'],
    root: path.resolve(__dirname, './')
  },
  // plugins: [
  //   commonsPlugin,
  //   definePlugin,
  //   new webpack.NoErrorsPlugin()
  // ],
  debug: true,

  devtool: 'eval',

  plugins: [
    //commonsPlugin,
    definePlugin,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

    // Tell babel that we want to hot-reload
  babelQuery: {
    presets: ['react-hmre'],
  },
}