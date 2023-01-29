import { RuleSetRule } from 'webpack';

export default function buildLoaders(): RuleSetRule[] {

	const typescriptLoader = {
		test: /\.tsx?$/, // tsx and ts (x?)
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		typescriptLoader,
	]
}