// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

var testUtils = require('./testUtils');
var app = require('../app.js');
var request = require('supertest')(app);

describe('ExampleAPI', function() {

    before(testUtils.reconnect);

    describe('#get /example', function() {
        it('should get a list of things', function(done) {
            request
                    .get('/example')
                    .expect(200, done);
        });
    });

    describe('#post /example', function() {
        it('should create a new thing', function(done) {
            request
                    .post('/example')
                    .send({
                              username: 'higgsy',
                              email: 'higgens@aliens.net'
                          })
                    .expect(200, done);

        });
    });

    after(testUtils.disconnect);

});
