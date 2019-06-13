const PATH = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const PATHS = {
  source: PATH.join(__dirname, 'src/js'),
  build: PATH.join(__dirname, 'build/src/js'),
};

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV.trim() === 'development';
module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval' : 'source-map',
  context: PATHS.source,
  entry: {
    index: './index.js',
  },

  output: {
    filename: 'main.js',
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
