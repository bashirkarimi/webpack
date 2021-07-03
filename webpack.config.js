const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');

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
      new postcssPresetEnv(),
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
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    [
                      "postcss-preset-env",
                      {
                        // Options
                      },
                    ],
                  ],
                },
              },
            },
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