const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = mode => {
  console.log('mode', mode)
  return {
    entry: './src/assets/js/main.js',
    mode: mode.development ? 'development': 'production',
    devtool: mode.development ? 'source-map' : '',
    output: {
      filename: mode.production ? '[name].[contenthash].js': '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new htmlWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: "[name].css" }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    devServer: {
      writeToDisk: true
    },
    optimization: {
      usedExports: true,
    }
  }
};