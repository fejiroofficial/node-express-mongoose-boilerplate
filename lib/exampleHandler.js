var ExampleModel = require('../models/ExampleModel');

function findAll(callback) {
    ExampleModel.find({}, callback);
}

function createUser(body, callback) {
    var newExample = new ExampleModel(body);
    newExample.save(function(err, user) {
        if (err) {
            return callback(err);
        }

        callback(null, user);
    });
}

////////////////////////////////////////////

var self = {
    findAll: findAll,
    createUser: createUser
};

module.exports = self;
