const router          = require('express').Router()
      ,manifesto      = require('./manifest')
      ,cosmic         = require('./cosmos')
      ,path           = require('path')
      ,multer         = require('multer')
      ,uuidv4         = require('uuid/v4')
      ,bfile          = require('./bluzelle')
      ,masterDb       = require('./masterDB');

var upload = multer({dest: 'uploads/'}).single('file');

/**
 * Primary app routes.
 * app.get('/', homeController.index);
 */
router.post('/', (req, res) => {
  upload(req, res, function(err) {
    if (err) {
      // An error occurred when uploading
      console.log('err', err)
    }
    res.json({success: true, message: 'Image uploaded!'});

    //  get file from post request
    var file = req.file
    console.log(file);

    //push the manifest data with the metadata to ipfs using cosmos => get hash
    console.log(file.path);
    filePath = file.path


    // hash = getHash(filePath)

    getHash(filePath).then(hash => {
      //push manifest file to bluzelle
      manFile = getMan(file, hash);
    })
  })
});

getHash = async (filePath) => {
  return await cosmic.addFile(filePath)
};

getMan = async (file, hash) => {
  manFile =  await manifesto.generateManifest(file, hash)
  uuid = await manFile.uuid;
  await masterDb.addApp(uuid);
  await bfile.setConnection(uuid);
  await bfile.createManifest(manFile.fileName, manFile);
  return manFile
}

module.exports = router;
