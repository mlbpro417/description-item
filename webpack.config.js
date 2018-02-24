const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'react-client/dist');
const APP_DIR = path.resolve(__dirname, 'react-client/src');

const config = {
  entry: `${APP_DIR}/Render.jsx`,
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = config;
