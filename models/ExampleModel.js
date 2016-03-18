var mongoose = require('mongoose');

/**
 * Example schema
 */

exampleSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }

});

/**
 * Events
 */

// on every save, add the dates
exampleSchema.pre('save', function(next) {
    this.created = Date.now;
    next();
});

/**
 * Statics
 */

/**
 * Find a user.
 *
 * @param {String} username
 * @param {Function} callback
 * @api public
 * @static
 */
exampleSchema.statics.getUserByUsername = function(username, callback) {
    return this.where('username', username).exec(callback);
};

/**
 * Exports
 */
module.exports = mongoose.model('ExampleModel', exampleSchema);
