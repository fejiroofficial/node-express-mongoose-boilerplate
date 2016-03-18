// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

var expect = require('chai').expect;
var ExampleModel = require('../models/ExampleModel');
var testUtils = require('./testUtils');

describe('ExampleModel', function() {

    before(testUtils.reconnect);

    beforeEach(testUtils.clear);

    describe('#create()', function() {
        it('should create a new Example', function(done) {

            var example = new ExampleModel({
                username: 'foo',
                email: 'bar@turner.com'
            });

            example.save(function(err, result) {
                //expect(err).to.
                expect(result.username).to.equal('foo');
                expect(result.email).to.equal('bar@turner.com');
                done();
            });
        });
    });

    after(testUtils.disconnect);

});
