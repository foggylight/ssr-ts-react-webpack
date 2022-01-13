const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    name: 'server',
    entry: path.resolve(__dirname, 'server/server.ts'),
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
    },
    externals: [
        nodeExternals()
    ],
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    configFile: 'tsconfig.server.json',
                },
            },
            {
                test: /\.(css|s[ac]ss)$/,
                loader: 'null-loader',
            }
        ],
    },
    target: 'node',
    node: {
        __dirname: false,
    }
};
