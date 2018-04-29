const uuidv4        = require('uuid/v4')
      ,uuidv1       = require('uuid/v1');

//generate a manifest file given a file

function getFileName(file) {
  return file.name;
}

function getFileType(file) {
  var filename = file.name;
  return filename.substring(filename.lastIndexOf('.')+1, filename.length) || filename;
}

function createManifest(file) {
  const manifest = {
    id: uuidv1(),
    fileName: getFileName(file),
    fileType: getFileType(file),
    uuid: uuidv4()
  }
  return manifest;
}

function setHash(manifest, hash) {
  manifest.hash = hash;
  return manifest;
}

module.exports.generateManifest = createManifest;
module.exports.setHash = setHash;
