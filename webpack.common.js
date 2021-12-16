const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
        {
            test: /\.(ts|tsx)$/,
            use: 'ts-loader',
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
            include: /\.module\.css$/,
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
            exclude: /\.module\.css$/,
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
            include: /\.module\.s[ac]ss$/,
        },
        {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            exclude: /\.module\.s[ac]ss$/,
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: 'src/index.html',
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
