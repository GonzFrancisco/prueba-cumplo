const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './client/index.js',
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: '[name].[contenthash].js',
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /.(js|jsx)$/,
				exclude: /node_modules/,
			},
			{
				use: ['style-loader', 'css-loader', 'sass-loader'],
				test: /.(css|sass|scss)$/,
			},
			{
				type: 'asset/resource',
				test: /\.(png|svg|jpg|jpeg)$/i,
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './client/public/index.html',
		}),
	],
}
