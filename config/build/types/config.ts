export type BuildMode = 'development' | 'production';

export interface BuildEnv {
	port: number;
	mode: BuildMode;
};

export interface BuildPath {
	entry: string;
	build: string;
	html: string;
}

export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPath;
	isDev: boolean;
	port: number;
}