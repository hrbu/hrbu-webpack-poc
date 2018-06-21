/**
 * Credits for a good webpack introduction go to https://hackernoon.com/@nirjhor123
 * @see https://hackernoon.com/webpack-3-quickstarter-configure-webpack-from-scratch-30a6c394038a
 */
"use strict";
const path = require('path');
const artifactName = __dirname.split(path.sep).pop();
const distFolder = path.resolve(__dirname, global.cubx.distFolderWebpackage, artifactName)

const config = {
    // make this configuration independent from current working directorynpm i -D webpack-dev-server
    context: path.resolve(__dirname),

    entry: `./${artifactName}.js`,
    output: {
        path: distFolder,
        filename: `${artifactName}.bundle.js`
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        // presets: ['@babel/preset-env'],
                        babelrc: false
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: `${artifactName}_[local]`
                        }
                    }
                ]
            }
        ]
    }
};
module.exports = config;

