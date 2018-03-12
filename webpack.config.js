const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: [
      './react/polyfill.js',
      './react/client-entry.jsx'
    ]
  },

  output: {
    path: __dirname + '/assets/',
    filename: 'react-bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['react', 'env']
        }
      }
    ]
  }
};
