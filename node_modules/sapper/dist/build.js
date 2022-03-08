'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = require('path');
var path__default = _interopDefault(path);
var fs = require('fs');
require('./chunk2.js');
var core = require('./core.js');
require('module');
require('./index.js');
require('string-hash');
require('sourcemap-codec');
require('./chunk3.js');
require('svelte/compiler');
var __chunk_4 = require('./chunk4.js');
var __chunk_5 = require('./chunk5.js');
require('html-minifier');
var __chunk_6 = require('./chunk6.js');

async function build({
	cwd,
	src = 'src',
	routes = 'src/routes',
	output = 'src/node_modules/@sapper',
	static: static_files = 'static',
	dest = '__sapper__/build',

	bundler,
	legacy = false,
	ext,
	oncompile = __chunk_5.noop
} = {}) {
	bundler = __chunk_4.validate_bundler(bundler);

	cwd = path.resolve(cwd);
	src = path.resolve(cwd, src);
	dest = path.resolve(cwd, dest);
	routes = path.resolve(cwd, routes);
	output = path.resolve(cwd, output);
	static_files = path.resolve(cwd, static_files);

	if (legacy && bundler === 'webpack') {
		throw new Error(`Legacy builds are not supported for projects using webpack`);
	}

	__chunk_5.rimraf(output);
	__chunk_5.mkdirp(output);
	__chunk_4.copy_runtime(output);

	__chunk_5.rimraf(dest);
	__chunk_5.mkdirp(`${dest}/client`);
	__chunk_4.copy_shimport(dest);

	// minify src/template.html
	// TODO compile this to a function? could be quicker than str.replace(...).replace(...).replace(...)
	const template = __chunk_4.read_template(src);

	// remove this in a future version
	if (template.indexOf('%sapper.base%') === -1) {
		const error = new Error(`As of Sapper v0.10, your template.html file must include %sapper.base% in the <head>`);
		error.code = `missing-sapper-base`;
		throw error;
	}

	fs.writeFileSync(`${dest}/template.html`, __chunk_6.minify_html(template));

	const manifest_data = core.create_manifest_data(routes, ext);

	// create src/node_modules/@sapper/app.mjs and server.mjs
	core.create_app({
		bundler,
		manifest_data,
		cwd,
		src,
		dest,
		routes,
		output,
		dev: false
	});

	const { client, server, serviceworker } = await core.create_compilers(bundler, cwd, src, dest, false);

	const client_result = await client.compile();
	oncompile({
		type: 'client',
		result: client_result
	});

	const build_info = client_result.to_json(manifest_data, { src, routes, dest });

	if (legacy) {
		process.env.SAPPER_LEGACY_BUILD = 'true';
		const { client } = await core.create_compilers(bundler, cwd, src, dest, false);

		const client_result = await client.compile();

		oncompile({
			type: 'client (legacy)',
			result: client_result
		});

		client_result.to_json(manifest_data, { src, routes, dest });
		build_info.legacy_assets = client_result.assets;
		delete process.env.SAPPER_LEGACY_BUILD;
	}

	fs.writeFileSync(path.join(dest, 'build.json'), JSON.stringify(build_info));

	const server_stats = await server.compile();
	oncompile({
		type: 'server',
		result: server_stats
	});

	let serviceworker_stats;

	if (serviceworker) {

		const client_files = client_result.chunks
			.filter(chunk => !chunk.file.endsWith('.map')) // SW does not need to cache sourcemap files
			.map(chunk => `client/${chunk.file}`);

		core.create_serviceworker_manifest({
			manifest_data,
			output,
			client_files,
			static_files
		});

		serviceworker_stats = await serviceworker.compile();

		oncompile({
			type: 'serviceworker',
			result: serviceworker_stats
		});
	}
}

exports.build = build;
//# sourceMappingURL=build.js.map
