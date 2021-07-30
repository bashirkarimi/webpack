const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const CompressionPlugin = require("compression-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = mode => {
  console.log('mode', mode)
  return {
    entry: './src/assets/js/main.js',
    mode: mode.development ? 'development': 'production',
    output: {
      filename: mode.production ? '[name].[contenthash].js': '[name].js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: '[name][ext][query]',
      clean: true,
    },
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
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
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
    plugins: [
      new htmlWebpackPlugin(),
      new MiniCssExtractPlugin({ filename: "[name].css" }),
      new postcssPresetEnv(),
      new CompressionPlugin(),
    ],
    devServer: {
      writeToDisk: true,
      open: true,
    },
    devtool: mode.development ? 'source-map' : 'eval',
    target: 'web',
    optimization: {
      usedExports: true,
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ],
    }
  }
};