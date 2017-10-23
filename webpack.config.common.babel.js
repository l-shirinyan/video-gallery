import webpack from 'webpack';
import WebpackConfig from 'webpack-config';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

module.exports = new WebpackConfig().merge({
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  context:  path.join(__dirname,'/app'),
  module: {
    loaders: [{
        test: /\.scss$/,
        loader: 'style-loader!css-loader?sourceMap!sass-loader?sourceMap&sourceComments'
    }, {
        test: /\.json$/,
        loader: 'json-loader'
    }, {
        test: /\.html$/,
        loader: 'ng-cache-loader?prefix=[dir]/[dir]'
    }, {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=env&plugins[]=angularjs-annotate',
        exclude: /node_modules/
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new HtmlWebpackPlugin({
      title: 'Video Gallery',
      template: 'index.ejs',
      inject: 'body'
    })
  ]
})