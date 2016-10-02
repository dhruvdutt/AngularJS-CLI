'use strict';

const Hapi = require('hapi');

const APP_HOST = process.env.HOST || "localhost";
const APP_PORT = process.env.PORT || 8000;

// Create a server with a host and port
const server = new Hapi.Server();

server.register(require('inert'), (err) => {
	server.connection({
		host: APP_HOST,
		port: APP_PORT
	});

	server.route({
	    method: 'GET',
	    path: '/dist/{param*}',
	    handler: {
	        directory: {
	            path: 'dist'
	        }
	    }
	});

	server.route({
		method: 'GET',
		path: '/',
		handler: function (request, reply) {
			reply.file('./index.html');
		}
	});

	// Start the server
	server.start((err) => {
		if (err) {
			throw err;
		}
		console.log('Server running at:', server.info.uri);
	});
});
