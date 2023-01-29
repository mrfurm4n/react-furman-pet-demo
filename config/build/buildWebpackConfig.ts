import { Configuration } from 'webpack';

import { BuildOptions } from './types/config';

import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';

export default function buildWebpacConfig(options: BuildOptions): Configuration {
	const { paths, mode } = options;

	return {
		mode: mode,
		devtool: 'inline-source-map',

		entry: {
			bundle: paths.entry,
		},

		output: {
			filename: '[name].[contenthash].js', // off browser cache
			path: paths.build,
			clean: true,
		},

		resolve: buildResolvers(),

		module: {
			rules: buildLoaders(),
		},

		plugins: buildPlugins(options),
	}
};