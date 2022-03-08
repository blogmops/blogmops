'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var path = require('path');
var path__default = _interopDefault(path);
var fs = require('fs');

function noop() {}

function mkdirp(dir) {
	const parent = path.dirname(dir);
	if (parent === dir) return;

	mkdirp(parent);

	try {
		fs.mkdirSync(dir);
	} catch (err) {
		// ignore
	}
}

function rimraf(thing) {
	if (!fs.existsSync(thing)) return;

	const stats = fs.statSync(thing);

	if (stats.isDirectory()) {
		fs.readdirSync(thing).forEach(file => {
			rimraf(path.join(thing, file));
		});

		fs.rmdirSync(thing);
	} else {
		fs.unlinkSync(thing);
	}
}

function copy(from, to) {
	if (!fs.existsSync(from)) return;

	const stats = fs.statSync(from);

	if (stats.isDirectory()) {
		fs.readdirSync(from).forEach(file => {
			copy(path.join(from, file), path.join(to, file));
		});
	} else {
		mkdirp(path.dirname(to));
		fs.writeFileSync(to, fs.readFileSync(from));
	}
}

exports.copy = copy;
exports.mkdirp = mkdirp;
exports.noop = noop;
exports.rimraf = rimraf;
//# sourceMappingURL=chunk5.js.map
