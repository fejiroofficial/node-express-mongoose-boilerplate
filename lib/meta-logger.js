/**
 * Set up console logging and return a request logger with matching formatting
 * @param {string} appName - the name that appears in the log prefix
 * @returns {function} a request logger for express
 */
module.exports = function(appName) {

    var logLevel = 0;

    if (process.env.NODE_ENV === 'test') {
        logLevel = 4; // this means errors only
    }

    // set up console logging
    var logger = require('custom-logger').config({
                                                     timestamp: 'yyyy-mm-dd HH:MM:ss.l',
                                                     format: '%timestamp% [' + appName + '] [%event%]%message%',
                                                     level: logLevel
                                                 });

    // set up request logging
    var expressLogger = require('morgan');
    expressLogger.token('zdate', function() {
        return new Date().toISOString().replace(/T/, ' ').replace(/Z/, '');
    });

    // return request logger for express
    var format = ':zdate [' + appName + '] [info] :method :url :status :res[content-length] :remote-addr :referrer :user-agent';

    return {
        expressLogger: expressLogger(format),
        logger: logger
    };
};
