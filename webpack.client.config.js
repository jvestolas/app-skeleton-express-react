const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
  devtool: 'source-map',
  entry: './src/client/index.js',
  output: {
    path: DIST_PATH,
    filename: 'client.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  devServer: {
    contentBase: DIST_PATH,
    compress: true,
    port: 3000,
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({ template: './src/client/index.html' })
  ]
}
