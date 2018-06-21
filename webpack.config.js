/**
 * Credits for a good webpack introduction go to https://hackernoon.com/@nirjhor123
 * @see https://hackernoon.com/webpack-3-quickstarter-configure-webpack-from-scratch-30a6c394038a
 */
"use strict";
const find = require('find');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

global.cubx = {
    distFolder: path.resolve(__dirname, '_dist'),
    distFolderWebpackage: path.resolve(__dirname, '_dist', __dirname.split(path.sep).pop())
}

const baseConfig = {
    context: path.resolve(__dirname),
    // 'entry' is defined only as we have to set the default source path to '.' (default is 'src')
    // TODO: move artifact folders into a 'src' subdirectory
    entry: './package.json',
    // 'output' is defined only as we have to define an input
    output: {
        path: global.cubx.distFolderWebpackage,
        filename: 'package.js'
    },

    plugins: [
        new CleanWebpackPlugin([global.cubx.distFolderWebpackage]),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname),
                to: global.cubx.distFolderWebpackage,
                ignore: [
                    '.git/**/*',
                    'node_modules/**/*',
                    `${global.cubx.distFolder}/**/*`]
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
    // devServer: {
    //     contentBase: path.resolve(__dirname, `./${global.cubx.distFolder}/assets/media`),
    //     compress: true,
    //     port: 12000,
    //     stats: 'errors-only',
    //     open: true,
    //     overlay: {
    //         warnings: true,
    //         errors: true
    //     }
    // },
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

// collect webpack configuration of artifacts
const artifactConfigs = [baseConfig];
const subConfigs = resolveSubConfigs([path.resolve(__dirname, global.cubx.distFolder), path.resolve(__dirname, 'node_modules')]);
subConfigs.forEach(subConfig => {
    console.log(`Loading subconfig "${subConfig}" ...`)
    artifactConfigs.push(require(subConfig))
});
module.exports = artifactConfigs;


/**
 * 
 * @param [] ignorePathsArray 
 */
function resolveSubConfigs(ignorePathsArray) {
    const files = find.fileSync(/webpack\.config.js$/, __dirname);
    const relevantFiles = [];
    files.forEach(file => {
        let ignoreFile = false;
        ignorePathsArray.forEach(ignorePath => {
            // ignore file on webpackage root level
            if (file === path.resolve(__dirname, 'webpack.config.js')) {
                ignoreFile = true;
                return;
            }
            // ignore files within one of the passed paths to be ignored
            if (file.startsWith(ignorePath)) {
                ignoreFile = true;
                return;
            }
        })
        if (!ignoreFile) {
            relevantFiles.push(file);
        }
    })
    const subConfigs = [];
    relevantFiles.forEach(file => {
        const filePathElements = file.split(path.sep);
        const fileName = filePathElements.pop(); // just the file itself
        const folder = filePathElements.pop()
        subConfigs.push(`./${folder}/${fileName}`);

    });
    return subConfigs;
}

