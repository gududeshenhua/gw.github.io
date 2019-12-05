 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
   plugins: [
	 devtool:'source-map',
     new UglifyJSPlugin({
		 source:true  
	 }), /* 压缩生产环境下 文件的体积*/
	 new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }) 
   ]
 }); 