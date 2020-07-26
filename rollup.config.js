import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
// import postcss from "rollup-plugin-postcss";
// import sveltePreprocess from "svelte-preprocess";
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
// import * as path from 'path';
// import marked from 'marked';
import config from 'sapper/config/rollup';
import glob from 'rollup-plugin-glob';
import markdown from './src/utils/markdown.js';
import pkg from './package.json';
// import postcssConfig from "./postcss.config.js";
import * as dotenv from 'dotenv';
dotenv.config();
const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;
const onwarn = (warning, onwarn) =>
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) || onwarn(warning);

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			svelte({
				dev,
				hydratable: true,
				/* preprocess: sveltePreprocess(postcssConfig), */
				emitCss: true,
			}),
			resolve({ browser: true, dedupe: ['svelte'] }),
			commonjs(),
			markdown(),
			glob(),
			legacy &&
				babel({
					extensions: ['.js', '.mjs', '.html', '.svelte'],
					babelHelpers: 'runtime',
					exclude: ['node_modules/@babel/**'],
					presets: [['@babel/preset-env', { targets: pkg.browserslist.toString() }]],
					plugins: [
						dev && ["istanbul", { "exclude": [ "**/*.spec.js" ] }]
						'@babel/plugin-syntax-dynamic-import',
						[
							'@babel/plugin-transform-runtime',
							{
								useESModules: true,
							},
						],
					],
				}),
			!dev && terser({ module: true }),
		],
		preserveEntrySignatures: false,
		onwarn,
	},
	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				'process.browser': false,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			svelte({
				generate: 'ssr',
				dev,
				/* preprocess: sveltePreprocess(postcssConfig), */
			}),
			/* postcss({
        minimize: true,
        extract: path.resolve(__dirname, "./static/global.css"),
      }), */
			resolve(),
			commonjs(),
			markdown(),
			glob(),
		],
		external: Object.keys(pkg.dependencies).concat(
			require('module').builtinModules || Object.keys(process.binding('natives')),
		),
		preserveEntrySignatures: 'strict',
		onwarn,
	},
	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve({ dedupe: ['svelte'] }),
			replace({
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode),
			}),
			commonjs(),
			!dev && terser(),
		],
		preserveEntrySignatures: false,
		onwarn,
	},
};
