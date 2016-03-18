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
