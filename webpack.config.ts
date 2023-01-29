import path from 'path';
import { Configuration } from 'webpack';

import buildWebpacConfig from './config/build/buildWebpackConfig';
import { BuildMode, BuildPath } from './config/build/types/config';

const paths: BuildPath = {
	entry: path.resolve(__dirname, 'src', 'index.ts'),
	build: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode: BuildMode = 'development';
const isDev = mode === 'development';

const config: Configuration = buildWebpacConfig({
	mode,
	paths,
	isDev,
});

export default config;