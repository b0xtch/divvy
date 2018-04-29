const index           = require('./index')
      ,nodes          = require('./nodes')

/**
 * Routing Config
 */
module.exports = (app) =>{
  app.use('/', index);
  app.use('/upload', nodes);
}
