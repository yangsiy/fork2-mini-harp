#!/usr/bin/env node

var parseArgs = require('minimist');
var res = parseArgs(process.argv.slice(2));
var port = 4000;
if (res.port != undefined) {
	port = res.port;
}

var createMiniHarp = require('../');
var app = createMiniHarp();

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