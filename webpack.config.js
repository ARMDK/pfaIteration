const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    compress: true,
    host: 'localhost',
    port: 8080,
    proxy: {
      '/': 'http://localhost:3000',
    },
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      
      // {
      //   test: /\.png|svg|jpg|gif$/,
      //   use: ['file-loader'],
      // },
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        exclude: /node_modules/,
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
