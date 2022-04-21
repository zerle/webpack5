const path = require('path')
const { merge } =  require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public/js'),
          to: path.resolve(__dirname, '../dist/public/js'),
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: './css/[name].[contenthash].css',
      chunkFilename: './css/[id].[contenthash].css',
    })
  ],
  // 告知 webpack 使用 TerserPlugin 或其它在 optimization.minimizer 定义的插件压缩 bundle。
  optimization: {   
    minimizer: [
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
})