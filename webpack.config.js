const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  // 客户端渲染的入口文件
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    // 因为目前我们的项目里边只有 js 和 jsx 文件, 所以只配这一条规则就可以啦~
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  devtool: 'sourcemap',
  plugins: [
    // 使用 html webpack plugin 创建 html 文件作为项目产出的依托文件
    new HtmlWebPackPlugin({
      template: './index.temp.html',
    }),
  ],
};
