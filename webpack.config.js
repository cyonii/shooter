const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  devtool: 'source-map',
};
