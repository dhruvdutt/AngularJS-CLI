'use strict';

module.exports = {
    context: __dirname + '/client/scripts',
    entry: './index.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'main.js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    }
};
