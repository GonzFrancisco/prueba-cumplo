const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const path = require('path')

const devConfig = {
	mode: 'development',
	output: {
		publicPath: '/',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '../build'),
		},
		historyApiFallback: true,
		port: 3000,
		open: true,
	},
	target: 'web',
}

module.exports = merge(common, devConfig)
