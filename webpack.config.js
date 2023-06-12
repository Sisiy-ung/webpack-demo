const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  // js执行文件入口
  entry: './main.js',
  output: {
    // 将所有依赖的模块合并输出到bundle.js文件
    filename: 'bundle.js',
    // 将输出文件都放到dist文件夹
    path: path.resolve(__dirname, './dist')

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`
    })
  ]
}