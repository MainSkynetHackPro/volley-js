const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './front/app.js',
  devtool: 'eval-source-map',
  devServer: {
    disableHostCheck: true,
    compress: false,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Volley',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app'
    })
  ]
}