#!/usr/bin/env node

var parseArgs = require('minimist');
var res = parseArgs(process.argv.slice(2));

var port = 4000;
if (res.port != undefined) {
	port = res.port;
}

var rootPath = process.cwd();
if (res._.length > 0) {
	rootPath = res._[0];
}

var createMiniHarp = require('../');
var app = createMiniHarp(rootPath);

console.log("Starting mini-harp on http://localhost:" + port);

app
	.use(function (request, response, next) {
		url = request.url;
		if (request.url === '/current-time') {
			response.end((new Date()).toISOString() + '\n');
		} else {
			next();
		}
	})
	.listen(port);