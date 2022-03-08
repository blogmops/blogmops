'use strict';

var __chunk_3 = require('./chunk3.js');

var webpack = {
	dev: __chunk_3.dev,

	client: {
		entry: () => {
			return {
				main: `${__chunk_3.src}/client`
			};
		},

		output: () => {
			return {
				path: `${__chunk_3.dest}/client`,
				filename: '[hash]/[name].js',
				chunkFilename: '[hash]/[name].[id].js',
				publicPath: `client/`
			};
		}
	},

	server: {
		entry: () => {
			return {
				server: `${__chunk_3.src}/server`
			};
		},

		output: () => {
			return {
				path: `${__chunk_3.dest}/server`,
				filename: '[name].js',
				chunkFilename: '[hash]/[name].[id].js',
				libraryTarget: 'commonjs2'
			};
		}
	},

	serviceworker: {
		entry: () => {
			return {
				'service-worker': `${__chunk_3.src}/service-worker`
			};
		},

		output: () => {
			return {
				path: __chunk_3.dest,
				filename: '[name].js',
				chunkFilename: '[name].[id].[hash].js'
			}
		}
	}
};

module.exports = webpack;
//# sourceMappingURL=webpack.js.map
