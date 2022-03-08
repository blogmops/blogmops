'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('path');
require('fs');
require('http');
require('child_process');
require('net');
require('./chunk.js');
require('events');
require('./chunk2.js');
var core = require('./core.js');
require('module');
require('./index.js');
require('string-hash');
require('sourcemap-codec');
require('./chunk3.js');
require('svelte/compiler');
require('./chunk4.js');
require('./chunk5.js');
var dev = require('./dev.js');
require('html-minifier');
require('./chunk6.js');
var build = require('./build.js');
require('url');
require('stream');
require('https');
require('zlib');
var _export = require('./export.js');
require('http-link-header');

function find_page(pathname, cwd = 'src/routes') {
	const { pages } = core.create_manifest_data(cwd);

	for (let i = 0; i < pages.length; i += 1) {
		const page = pages[i];

		if (page.pattern.test(pathname)) {
			return page.parts[page.parts.length - 1].component.file;
		}
	}
}

exports.dev = dev.dev;
exports.build = build.build;
exports.export = _export.export;
exports.find_page = find_page;
//# sourceMappingURL=api.js.map
