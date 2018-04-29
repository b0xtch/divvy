
const multer             = require('multer');

/**
 * Routing Config
 */
module.exports = (app) =>{
  var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
      cb(null, 'index.html')
    }
  });

  app.use(multer({storage: storage}).single('file'));

}
