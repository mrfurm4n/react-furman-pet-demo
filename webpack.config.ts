import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
	mode: "production",
	devtool: 'inline-source-map',

	entry: {
		bundle: path.resolve(__dirname, 'src', 'index.ts'),
	},

	output: {
		filename: '[name].[contenthash].js', // off browser cache
		path: path.resolve(__dirname, 'build'),
		clean: true,
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'], // disable input extension (import)
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/, // tsx and ts (x?)
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},

	plugins: [
		new webpack.ProgressPlugin(), // build progress in console
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html'), // catch root element
		})
	],
};

export default config;