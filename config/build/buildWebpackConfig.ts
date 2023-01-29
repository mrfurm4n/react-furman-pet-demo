import { Configuration } from 'webpack';

import { BuildOptions } from './types/config';

import buildPlugins from './buildPlugins';
import buildLoaders from './buildLoaders';
import buildResolvers from './buildResolvers';
import buildDevServer from './buildDevServer';

export default function buildWebpacConfig(options: BuildOptions): Configuration {
	const { paths, mode, isDev } = options;

	return {
		mode: mode,

		entry: {
			bundle: paths.entry,
		},

		output: {
			filename: '[name].[contenthash].js', // off browser cache
			path: paths.build,
			clean: true,
		},

		module: {
			rules: buildLoaders(),
		},

		resolve: buildResolvers(),

		plugins: buildPlugins(options),

		devServer: isDev ? buildDevServer(options) : undefined,

		devtool: isDev ? 'inline-source-map' : undefined,
	}
};