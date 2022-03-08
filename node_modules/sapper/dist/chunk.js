'use strict';

var net = require('net');

var promise;
function weird() {
    if (!promise) {
        promise = get_weird(9000);
    }
    return promise;
}
function get_weird(port) {
    return new Promise(function (fulfil) {
        var server = net.createServer();
        server.unref();
        server.on('error', function () {
            fulfil(get_weird(port + 1));
        });
        server.listen({ port: port }, function () {
            var server2 = net.createServer();
            server2.unref();
            server2.on('error', function () {
                server.close(function () {
                    fulfil(false);
                });
            });
            server2.listen({ port: port }, function () {
                server2.close(function () {
                    server.close(function () {
                        fulfil(true);
                    });
                });
            });
        });
    });
}

function check(port) {
    return weird().then(function (weird$$1) {
        if (weird$$1) {
            return check_weird(port);
        }
        return new Promise(function (fulfil) {
            var server = net.createServer();
            server.unref();
            server.on('error', function () {
                fulfil(false);
            });
            server.listen({ port: port }, function () {
                server.close(function () {
                    fulfil(true);
                });
            });
        });
    });
}
function check_weird(port) {
    return new Promise(function (fulfil) {
        var client = net.createConnection({ port: port }, function () {
            client.end();
            fulfil(false);
        })
            .on('error', function () {
            fulfil(true);
        });
    });
}

function find(port) {
    return weird().then(function (weird$$1) {
        if (weird$$1) {
            return new Promise(function (fulfil) {
                get_port_weird(port, fulfil);
            });
        }
        return new Promise(function (fulfil) {
            get_port(port, fulfil);
        });
    });
}
function get_port(port, cb) {
    var server = net.createServer();
    server.unref();
    server.on('error', function () {
        get_port(port + 1, cb);
    });
    server.listen({ port: port }, function () {
        server.close(function () {
            cb(port);
        });
    });
}
function get_port_weird(port, cb) {
    var client = net.createConnection({ port: port }, function () {
        client.end();
        get_port(port + 1, cb);
    })
        .on('error', function () {
        cb(port);
    });
}

function wait(port, _a) {
    var _b = (_a === void 0 ? {} : _a).timeout, timeout = _b === void 0 ? 5000 : _b;
    return new Promise(function (fulfil, reject) {
        var t = setTimeout(function () {
            reject(new Error("timed out waiting for connection"));
        }, timeout);
        get_connection(port, function () {
            clearTimeout(t);
            fulfil();
        });
    });
}
function get_connection(port, cb) {
    var timeout;
    var socket = net.connect(port, 'localhost', function () {
        cb();
        socket.destroy();
        clearTimeout(timeout);
    });
    socket.on('error', function () {
        clearTimeout(timeout);
        setTimeout(function () {
            get_connection(port, cb);
        }, 10);
    });
    timeout = setTimeout(function () {
        socket.destroy();
    }, 5000);
}

class Deferred {
	
	
	

	constructor() {
		this.promise = new Promise((fulfil, reject) => {
			this.fulfil = fulfil;
			this.reject = reject;
		});
	}
}

exports.Deferred = Deferred;
exports.check = check;
exports.find = find;
exports.wait = wait;
//# sourceMappingURL=chunk.js.map
