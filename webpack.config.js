const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = mode => {
  console.log('mode', mode)
  return {
    entry: './src/assets/js/main.js',
    mode: mode.development ? 'development': 'production',
    output: {
      filename: mode.production ? '[name].[contenthash].js': '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      writeToDisk: true
    },
    optimization: {
      usedExports: true,
    },
    plugins: [
      new htmlWebpackPlugin()
    ]
  }
};