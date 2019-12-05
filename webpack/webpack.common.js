const path = require('path');
const webpack = require('webpack'); 
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: { 
     app: './src/index.js' 
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({
       title: 'Production'
     }),
	  new webpack.optimize.CommonsChunkPlugin({
       name: 'manifest'
     })
   ],  
   output: {
     /* filename: '[name].bundle.js', */
	 filename: '[name].[chunkhash].js', 
     path: path.resolve(__dirname, 'dist'),
	 chunkFilename:'[name].bundle.js' 
   },
   module:{
   	  rules:[{
   		  test:/\.css$/,
   		  use:[
   			  'style-loader',
   			  'css-loader'
   		  ]/* 解析的顺序是从右往左解析 */
   	  },{
   		 test:/\.(png|svg|jpg|gif)$/, 
   		 use:['file-loader']  
   	  }, {
           test: /\.(woff|woff2|eot|ttf|otf)$/,
           use: [
             'file-loader'
           ]
         }] 
   } 
 }; 