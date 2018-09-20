const packageJSON = require('../package.json');
const find = require('find');
const path = require('path');

const manifest = {
  "name": packageJSON.name,
  "groupId": "",
  "version": packageJSON.version,
  "modelVersion": "10.0.0",
  "docType": "webpackage",
  "author": {
    "name": "Hd Böhlau",
    "email": "hrbu@incowia.com"
  },
  "license": packageJSON.license,
  "keywords": [],
  "man": [],
  "artifacts": {
    "apps": [],
    "elementaryComponents": getElementaries(packageJSON.name),
    "compoundComponents": [],
    "utilities": []
  }
}

/*
 * Helper functions
 */

function getElementaries(packageName) {
  const elementaries = [];
  const elementaryManifests = find.fileSync(/manifest\.elementary.js$/, path.resolve(__dirname));
  elementaryManifests.forEach(subManifestPath => {
    console.log(`Found elementary "${subManifestPath}" ...`);
    const subManifest = require(subManifestPath);
    const elementName = path.dirname(subManifestPath).split(path.sep).pop();
    subManifest.artifactId = `${packageName}-${elementName}`;
    elementaries.push(subManifest);
  });

  return elementaries;
}

module.exports = manifest;
