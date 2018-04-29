const index             = require('./index')
      ,uploads          = require('./uploads')
      ,uuid             = require('./uuid');

/**
 * Routing Config
 */
module.exports = (app) =>{
  app.use('/', index);
  app.use('/upload', uploads);
  app.use('/uuid', uuid)
}
