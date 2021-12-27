const { StylableWebpackPlugin } = require('@stylable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                                 test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                                 use: [
                                     {
                                         loader: 'url-loader',
                                     }
                                 ]
                             },
                             {
                                 test: /\.scss$/,
                                 include: [
                                     path.join(__dirname, 'node_modules/wix-animations'),
                                     path.join(__dirname, 'node_modules/wix-style-react')
                                 ],
                                 use: [
                                     {
                                         loader: 'style-loader'
                                     },
                                     {
                                         loader: 'css-loader',
                                         options: {
                                             importLoaders: 1,
                                             modules: {
                                                 localIdentName: '[name]__[local]___[hash:base64:5]',
                                                 exportLocalsConvention: 'camelCase',
                                             }
                                         }
                                     },
                                     {
                                         loader: 'resolve-url-loader'
                                     },
                                     {
                                         loader: 'sass-loader',
                                         options: {
                                             sourceMap: true
                                         }
                                     },
                                 ],
                             },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [new StylableWebpackPlugin(), new HtmlWebpackPlugin({ title: 'Stylable App' })],
    cache: { type: 'filesystem' },
};
