var config = require('config');
var db = require('./lib/meta-mongoose');
var app = require('./app');
GLOBAL.log = require('./lib/meta-logger')('MetroJobTracker').logger;

// Mongo connection setup
db.connect(config);

// Start Express
var server = app.listen(app.get('port'), function() {
    log.info('Express server listening on port ' + server.address().port);
});
