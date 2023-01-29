import webpack, { WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { BuildOptions } from './types/config';

export default function buildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
	return [
		new webpack.ProgressPlugin(), // build progress in console
		new HtmlWebpackPlugin({
			template: paths.html, // catch root element
		})
	]
}