var mongoose = require('mongoose');
var log = require('custom-logger');

/**
 * Connect to mongo DB
 * @param {Object} config
 */
function connect(config) {
    var databaseName = config.get('mongodb.db');
    var mongoServers = config.get('mongodb.instances');
    var options = config.get('mongodb.options');
    var instances = 'mongodb://' + mongoServers.map(function(instance) {
                return instance.host + ':' + instance.port + '/' + databaseName;
            }).join(',');

    mongoose.connect(instances, options);

    // When successfully connected
    mongoose.connection.on('connected', function() {
        log.info('Mongoose default connection open to ' + instances);
    });

    // If the connection throws an error
    mongoose.connection.on('error', function(err) {
        log.error('Mongoose default connection error: ' + err);
    });

    // When the connection is disconnected
    mongoose.connection.on('disconnected', function() {
        log.info('Mongoose default connection disconnected');
    });

    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            log.info('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    });

}

/**
 * Disconnect from mongo DB
 */
function disconnect() {
    mongoose.disconnect();
}

module.exports = {
    connect: connect,
    disconnect: disconnect
};
