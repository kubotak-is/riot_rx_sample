"use strict";

const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
      path: __dirname,
      filename: 'app.js'
    },
    module: {
      preLoaders: [
        {
          test: /\.tag$/,
          exclude: /node_modules/,
          loader: 'riotjs-loader',
          query: { type: 'babel' }
        }
      ],
      loaders: [
        {
          test: /\.(js|tag)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    resolve: {
      extensions:['', '.js', '.tag'],
      modulesDirectories: [
        'node_modules',
        'src'
      ]
    },
    devtool: '#source-map',
    plugins: [
      new webpack.ProvidePlugin({
        riot: "riot"
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
};