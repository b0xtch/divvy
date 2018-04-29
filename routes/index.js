const router         = require('express').Router()
      ,uuidv4        = require('uuid/v4');

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
