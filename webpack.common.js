const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './client/index.tsx',
    module: {
        rules: [
        {
            test: /\.(ts|tsx)$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    configFile: "tsconfig.client.json"
                }
            }],
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                    modules: true
                    }
                }
            ],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                    modules: true
                    }
                },
                'sass-loader',
            ],
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html',
        }),

        new MiniCssExtractPlugin(),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
