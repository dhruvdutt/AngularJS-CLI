/* eslint no-console: 0 */
/* eslint nonew: 0 */

'use strict';

const vision = require('vision');
const inert = require('inert');
const hapi = require('hapi');
const path = require('path');
const handlebars = require('handlebars');

const rootDir = path.join(__dirname, '..');
const APP_HOST = process.env.HOST || 'localhost';
const APP_PORT = process.env.PORT || 3000;

// Create a server with a host and port
const server = new hapi.Server();

server.register([vision, inert], () => {
    server.connection({
        host: APP_HOST,
        port: APP_PORT,
    });

    server.route({
        path: '/js/{param*}',
        method: 'GET',
        handler: {
            directory: {
                path: path.join(rootDir, 'dist/js'),
                index: false,
                listing: true,
            },
        },
    });

    server.route({
        method: 'GET',
        path: '/',
        handler(request, reply) { return reply.view('index.html.hbs'); },
    });

    server.views({
        engines: {
            hbs: handlebars,
        },
        path: path.join(rootDir, 'client'),
    });

    // Start the server
    server.start((err) => {
        if (err) {
            throw err;
        }
        console.log('Server running at:', server.info.uri);
    });
});
