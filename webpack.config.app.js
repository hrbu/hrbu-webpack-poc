/**
 * Credits for a good webpack introduction go to https://hackernoon.com/@nirjhor123
 * @see https://hackernoon.com/webpack-3-quickstarter-configure-webpack-from-scratch-30a6c394038a
 */
"use strict";
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

const CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const artifactName = 'app';
const distFolder = `_dist/${artifactName}`;

const config = {
    // make this configuration independent from current working directorynpm i -D webpack-dev-server
    context: path.resolve(__dirname, artifactName),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, distFolder),
        filename: `${artifactName}.bundle.js`
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([distFolder])
        // new ExtractTextPlugin("styles.css")
    ]
};
module.exports = config;

