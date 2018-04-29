const router          = require('express').Router()
      ,manifesto      = require('./manifest')
      ,cosmic         = require('./cosmos')
      ,path           = require('path')
      ,multer         = require('multer')
      ,bluzelle       = require('bluzelle').connect('ws://1.1.1.1:8000', UUID);

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
    console.log(req.file);

    //  get file from post request
    var file = req.file

    //Create meta data from file
    //file = manifesto.generateManifest(file)
    //console.log(file);

    //push the manifest data with the metadata to ipfs using cosmos => get hash
    console.log(file.path);
    filePath = file.path
    hash = cosmic.addFile(filePath)

    //add hash to manifest file
    file = manifesto.setHash(file, hash)

    //push manifest file to bluzelle


  })
});

module.exports = router;
