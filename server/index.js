'use strict';

const Hapi = require('hapi'),
      Path = require('path'),
      rootDir = Path.join(__dirname, '..'),
      APP_HOST = process.env.HOST || 'localhost',
      APP_PORT = process.env.PORT || 3000,
      // Create a server with a host and port
      server = new Hapi.Server();

server.register([require('vision'), require('inert')], (err) => {
    server.connection({
        host: APP_HOST,
        port: APP_PORT
    });

    server.route({
        path: '/js/{param*}',
        method: 'GET',
        handler: {
            directory: {
                path: Path.join(rootDir, 'dist/js'),
                index: false,
                listing: true
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            return reply.view('index.html.hbs');
        }
    });

    server.views({
        engines: {
            hbs: require('handlebars')
        },
        path: Path.join(rootDir, 'client')
    });

    // Start the server
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
});
