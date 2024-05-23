const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpackNodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const plugins = isProduction ? [] : [
  new NodemonPlugin({ legacyWatch: true }),
  new Dotenv({ path: './.env', systemvars: true }),
];

// Constant with our paths
const paths = {
  OUTPUT: path.resolve(__dirname, 'build'),
};

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  target: 'node',
  node: {
    __filename: true,
    __dirname: true,
  },
  output: {
    path: paths.OUTPUT,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@Application': path.resolve(__dirname, './src/application'),
      '@Middlwares': path.resolve(__dirname, './src/application/middlewares'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Models': path.resolve(__dirname, './src/models'),
    }
  },
  externals: [webpackNodeExternals()],
  mode: process.env.NODE_ENV,
  devtool: !isProduction && 'source-map',
  plugins,
};