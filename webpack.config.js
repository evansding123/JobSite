const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './client/src/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              ["@babel/plugin-transform-runtime",
                {
                  "regenerator": true
                },
              ],
            ],
          },
        },
      },
    ],
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
  }
};

module.exports = config;