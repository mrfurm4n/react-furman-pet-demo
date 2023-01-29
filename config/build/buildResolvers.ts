import { ResolveOptions } from 'webpack';

export default function buildResolvers(): ResolveOptions {
	return {
		extensions: ['.tsx', '.ts', '.js', '.jsx'], // disable input extension (import)
	}
}