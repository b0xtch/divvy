const express         = require('express')
      ,bodyParser     = require('body-parser')
      ,path           = require('path')
      ,chalk          = require('chalk')
      ,cors           = require('cors')
      ,fileUpload     = require('express-fileupload')
      //,routes         = require('./routes/routes')
      ,errorHandler   = require('errorhandler')
      ,dotenv         = require('dotenv')
      ,logger         = require('morgan')
      ,bluzelle       = require('bluzelle')
      ,index          = require('./routes/index')
      ,nodes          = require('./routes/nodes');

/**
 * Cosmos
 * Load environment variables from .env file, where API keys and passwords are configured.
 * process.env now has the keys and values you defined in your .env file.
 */
dotenv.load();

/** * Create Express server.
 */
var app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'pug');
//routes(app);
app.use('/', index);
app.use('/upload', nodes);
app.use(cors());
app.use(fileUpload());
app.use(logger('short'));
app.use(errorHandler());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'cosmos')));
//process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//app.use(subdomain({ base : 'myapp.dev', removeWWW : true }));

// app.post('/upload', (req, res, next) => {
//   console.log(req);
//   let rFile = req.body;
//   console.log(rFile);
//
//   // imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
//   //   if (err) {
//   //     return res.status(500).send(err);
//   //   }
//   //
//   //   res.json({file: `public/${req.body.filename}.jpg`});
//   // });
// });


/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s Express server listening on port %d in %s mode.', chalk.green('✓'), app.get('port'), app.get('env'));
});

module.exports = app; //module exported for testing
