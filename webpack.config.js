const path = require('path');

module.exports = {
  entry: './src/assets/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true,
  },
};