'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = require('path');
var path__default = _interopDefault(path);
var fs = require('fs');
var __chunk_5 = require('./chunk5.js');

function validate_bundler(bundler) {
	if (!bundler) {
		bundler = (
			fs.existsSync('rollup.config.js') ? 'rollup' :
			fs.existsSync('webpack.config.js') ? 'webpack' :
			null
		);

		if (!bundler) {
			// TODO remove in a future version
			deprecate_dir('rollup');
			deprecate_dir('webpack');

			throw new Error(`Could not find rollup.config.js or webpack.config.js`);
		}
	}

	if (bundler !== 'rollup' && bundler !== 'webpack') {
		throw new Error(`'${bundler}' is not a valid option for --bundler — must be either 'rollup' or 'webpack'`);
	}

	return bundler;
}

function deprecate_dir(bundler) {
	try {
		const stats = fs.statSync(bundler);
		if (!stats.isDirectory()) return;
	} catch (err) {
		// do nothing
		return;
	}

	// TODO link to docs, once those docs exist
	throw new Error(`As of Sapper 0.21, build configuration should be placed in a single ${bundler}.config.js file`);
}

function copy_shimport(dest) {
	const shimport_version = require('shimport/package.json').version;
	fs.writeFileSync(
		`${dest}/client/shimport@${shimport_version}.js`,
		fs.readFileSync(require.resolve('shimport/index.js'))
	);
}

function read_template(dir) {
	try {
		return fs.readFileSync(`${dir}/template.html`, 'utf-8');
	} catch (err) {
		if (fs.existsSync(`app/template.html`)) {
			throw new Error(`As of Sapper 0.21, the default folder structure has been changed:
  app/    --> src/
  routes/ --> src/routes/
  assets/ --> static/`);
		}

		throw err;
	}
}

const runtime = [
	'app.mjs',
	'server.mjs',
	'internal/shared.mjs',
	'internal/layout.svelte',
	'internal/error.svelte'
].map(file => ({
	file,
	source: fs.readFileSync(path.join(__dirname, `../runtime/${file}`), 'utf-8')
}));

function copy_runtime(output) {
	runtime.forEach(({ file, source }) => {
		__chunk_5.mkdirp(path.dirname(`${output}/${file}`));
		fs.writeFileSync(`${output}/${file}`, source);
	});
}

exports.copy_runtime = copy_runtime;
exports.copy_shimport = copy_shimport;
exports.read_template = read_template;
exports.validate_bundler = validate_bundler;
//# sourceMappingURL=chunk4.js.map
