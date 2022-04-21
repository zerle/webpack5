const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: './js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
      assets: path.resolve(__dirname, '../src/assets/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        // excluder: /node_modules/,
        include: path.resolve('src')
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: [path.resolve('src')],
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        },
        generator: {
          filename: "img/[name].[hash:6][ext]"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: 'index.html'
    })
  ]
}