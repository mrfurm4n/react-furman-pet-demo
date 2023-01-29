import path from 'path';
import { Configuration } from 'webpack';

import buildWebpacConfig from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPath } from './config/build/types/config';

export default (env: BuildEnv) => {

	const paths: BuildPath = {
		entry: path.resolve(__dirname, 'src', 'index.ts'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
	};

	const mode: BuildMode = env.mode || 'development';

	const port = env.port || 8000;

	const isDev = env.mode === 'development';

	const config: Configuration = buildWebpacConfig({
		mode,
		paths,
		isDev,
		port,
	});

	return config;
};