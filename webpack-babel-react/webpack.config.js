const path     = require('path');
const webpack  = require('webpack');
const DotenvPlugin = require('webpack-dotenv-plugin');

const config   = require('./config');
const manifest = require('./manifest');

const CONTEXT = __dirname;
const PORT    = config.PORT;



module.exports = {
  context: CONTEXT,
  entry: ['whatwg-fetch', 'babel-polyfill', './client/index.jsx'],
  output: {
    path: path.resolve(CONTEXT, 'public/dist'),
    publicPath: 'http://localhost:' + PORT + '/dist/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy']
        }
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devServer: {
    contentBase: 'public',
    inline: true,
    port: PORT,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DllReferencePlugin({ context: CONTEXT, manifest: manifest }),
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env'
    }),
  ]
}
