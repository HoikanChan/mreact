const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './index.jsx',
  watch: true,
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-typescript'],
              ['@babel/preset-env'],
              ['@babel/preset-react'],
            ],
            plugins: [
              ['@babel/plugin-transform-typescript', {
                jsxPragma: 'mreact.createElement',
                jsxPragmaFrag: 'mreact.createFragment',
                isTSX: true
              }],
            ]
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin],
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: 9000,
    open: true
  },
  resolve: {
    alias: {
      'mreact': path.resolve(__dirname, '../packages/api'),
      'mreact-dom': path.resolve(__dirname, '../packages/dom')
    }
  }
}