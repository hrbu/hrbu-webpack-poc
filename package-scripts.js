/**
 * This file contains some util functions referred by the npm scripts of package.json
 * TODO: Move this into a separate package to allow updating existing projects via 'npm update' or 'yarn update'
 */
const packageJSON = require('./package.json')
const opn = require('opn');

module.exports = {
  open: (timeout = 500) => {
    setTimeout(function(timeout) {
      opn(`http://localhost:4000/${packageJSON.name}/index.html`, {app: 'chrome'});
    }, 3000);
  }
}