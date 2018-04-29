const express        = require('express')
      ,router        = express.Router()
      ,uuidv4        = require('uuid/v4')
      ,manifesto     = require('./manifest')
      ,cosmic        = require('./cosmos');

      //cosmic.pinit()
      //hash = cosmic.addFile('public/MindFieldS2E1.mp4')

/**
 * Primary app routes.
 * app.get('/', homeController.index);
 */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Cosmos',
    uuid: uuidv4()
  });
});

module.exports = router;
