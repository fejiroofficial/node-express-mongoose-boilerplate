var config = require('config');
var db = require('./lib/meta-mongoose');
var app = require('./app');

// Mongo connection setup
db.connect(config);

// Start Express
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
