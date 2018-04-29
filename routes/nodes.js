const express        = require('express')
      ,router        = express.Router();

/**
 * Primary app routes.
 * app.get('/', homeController.index);
 */
 router.post('/upload', (req, res) => {
   console.log(req);
   let rFile = req.body;
   console.log(rFile);
 });


module.exports = router;
