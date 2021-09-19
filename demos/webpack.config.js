const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
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
              ['@babel/plugin-transform-react-jsx', {
                pragma: 'mreact.createElement',
                pragmaFrag: 'mreact.createFragment',
                runtime: 'classic',
                isTSX: true
              }],
            ]
          }
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'index',
    template: './index.html'
  })],
  devServer: {
    port: 9000,
    open: true,
    hot: true
  },
  resolve: {
    alias: {
      'mreact': path.resolve(__dirname, '../packages/api'),
      'mreact-dom': path.resolve(__dirname, '../packages/dom')
    },
    extensions: ['.tsx', '.jsx', '.ts', '.js']
  },
  devtool: 'source-map'
}