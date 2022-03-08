'use strict';

var __chunk_3 = require('./chunk3.js');

const sourcemap = __chunk_3.dev ? 'inline' : false;

var rollup = {
	dev: __chunk_3.dev,

	client: {
		input: () => {
			return `${__chunk_3.src}/client.js`
		},

		output: () => {
			let dir = `${__chunk_3.dest}/client`;
			if (process.env.SAPPER_LEGACY_BUILD) dir += `/legacy`;

			return {
				dir,
				entryFileNames: '[name].[hash].js',
				chunkFileNames: '[name].[hash].js',
				format: 'esm',
				sourcemap
			};
		}
	},

	server: {
		input: () => {
			return {
				server: `${__chunk_3.src}/server.js`
			};
		},

		output: () => {
			return {
				dir: `${__chunk_3.dest}/server`,
				format: 'cjs',
				sourcemap
			};
		}
	},

	serviceworker: {
		input: () => {
			return `${__chunk_3.src}/service-worker.js`;
		},

		output: () => {
			return {
				file: `${__chunk_3.dest}/service-worker.js`,
				format: 'iife',
				sourcemap
			}
		}
	}
};

module.exports = rollup;
//# sourceMappingURL=rollup.js.map
