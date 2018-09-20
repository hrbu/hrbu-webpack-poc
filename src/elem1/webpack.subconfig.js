const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackageName = require('../manifest.webpackage').name;
const elementName = webpackageName + '-' + __dirname.split(path.sep).pop();
const distFolder = path.resolve(__dirname, global.cubx.distFolderWebpackage, elementName)


const config = {
    // make this configuration independent from the current working directory
    context: path.resolve(__dirname),
    // define the entry module for the bundle to be created
    entry: `./element.js`,
    output: {
        path: distFolder,
        filename: `element.bundle.js`
    },
    module: {
        rules: [
            {
                // manage placeholdes in js files
                test: /\.js$/,
                use: [
                    {loader: `preprocess-loader?elementName=${elementName}`}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: `cubbles_${elementName}_[local]`
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'README.md', to: 'README.md',},
        ], {}),
        new HtmlWebpackPlugin({
            template: 'element.html',
            inject: 'body',
            filename: 'element.html',
            // manage placeholders
            templateParameters: {
                elementName: `${elementName}`
            },
        })
    ]
};
module.exports = config;

