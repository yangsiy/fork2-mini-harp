var connect = require('connect');
var serveStatic = require('serve-static');

var staticServer = function(root) {
	return connect()
			.use(serveStatic(root));
}

module.exports = staticServer;