var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  output: {
    path: path.resolve('build'),
    filename: 'build.[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.less', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },

      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]'
            }
          },
          { loader: 'less-loader' }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    })
  ]
}
