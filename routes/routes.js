const index             = require('./index')
      ,uploads          = require('./uploads');

/**
 * Routing Config
 */
module.exports = (app) =>{
  app.use('/', index);
  app.use('/upload', uploads);
}
