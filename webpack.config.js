/**
 * Credits for a good webpack introduction go to https://hackernoon.com/@nirjhor123
 * @see https://hackernoon.com/webpack-3-quickstarter-configure-webpack-from-scratch-30a6c394038a
 */
"use strict";
const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const distFolder = path.resolve(__dirname, '_dist');

const baseConfig = {
    context: path.resolve(__dirname),
    // 'entry' is defined only to set the default source path to '.' (default is 'src')
    entry: './package.json',
    // 'output' is defined only as we have to define an input
    output: {
        path: distFolder,
        filename: 'package.js'
    },

    plugins: [
        new CleanWebpackPlugin([distFolder]),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname),
                to: distFolder,
                ignore: [
                    'node_modules/**/*',
                    `${distFolder}/**/*`]
            },
        ], {}),
    ],
    /**
     * Webpack provides us a built-in server for development purpose, 
     *  so that we’re going to see what’s going to happen 
     *  while our application is ready for deployment into a real server.
     * 
     * Official docs: @see https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
        contentBase: path.resolve(__dirname, `./${distFolder}/assets/media`),
        compress: true,
        port: 12000,
        stats: 'errors-only',
        open: true,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    /**
     * This option controls if and how source maps are generated. 
     * With this feature, we know exactly where to look in order to fix/debug issues in our application. 
     * Very very useful for development purpose, but should NOT use in production.
     */
    devtool: 'inline-source-map',

    /**
     * If watch is active, after the initial build, webpack will continue to watch for changes in any of the resolved files.
     * @see https://webpack.js.org/configuration/watch/#watch
     */
    watchOptions: {
        aggregateTimeout: 300, // the default
        ignored: /node_modules/
    }
}

const configApp = require('./webpack.config.app');
const configElementary1 = require('./webpack.config.elementary1');
module.exports = [baseConfig, configApp, configElementary1];

