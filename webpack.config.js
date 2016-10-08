module.exports = {
    context: path.join(__dirname, '/client/scripts'),
    entry: './index.js',
    output: {
        path: path.join(__dirname, '/dist/js'),
        filename: 'main.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html',
            },
        ],
    },
};
