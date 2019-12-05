const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {  
  entry: { 
	  /* app:'./src/index.js',
	  print:'./src/print.js' */
	  app:'./src/index.js'
  }, 
  devtool:'inline-source-map',/* 添加不同的模式可以在打包后快速地定位到错误所在位置的文件以及行数 */
  devServer:{
	  contentBase:'./dist',
	  hot:true 
  },  
  output: { 
    //filename: 'bundle.js',
	filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
	publicPath:'/' 
  }, 
  plugins:[
	  new CleanWebpackPlugin(),  
	  new HtmlWebpackPlugin({  
		  title:'Output Management'  
	  }),
	  new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
  ], 
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