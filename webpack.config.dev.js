const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.html$/,
				loader: 'text-loader',
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpe?g|gif|png|PNG|ico|ogg)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
						emitFile: false,
					},
				}],
			},
			{
				test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
						emitFile: false,
					},
				}],
			},
			{
				test: /\.svg/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						emitFile: false,
						mimetype: 'image/svg+xml'
					}
				}]
			},
			{ test: /\.ejs$/, use: [{ loader: 'ejs-loader', options: { esModule: false }}] },
		],
	},

	resolve: {},

	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new CleanWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			_: "lodash"
		})
	],

	optimization: {},

	mode: 'development',
	devServer: {
		historyApiFallback: true,
		contentBase: '/',
		open: true,
		compress: true,
		hot: true,
		port: 9999,
		inline: true,
	},
};