// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

var express = require('express');
var router = express.Router();

var ExampleHandler = require('../lib/exampleHandler');

/**
 * @api {get} /example      An example endpoint
 * @apiName Example
 * @apiGroup Example
 *
 * @apiSuccess {Object}   users object    Some description
 * @apiSampleRequest /example
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
router.get('/', function(req, res) {

    ExampleHandler.findAll(function(err, users) {
        if (err) {
            return res.status(400).json({error: err});
        }

        return res.json(users);
    });

});

/**
 * @api {post} /example      Creates a user
 * @apiName CreateUser
 * @apiGroup Example
 *
 * @apiParam {String} username      Username
 * @apiParam {String} email     email
 *
 * @apiSuccess {Object}   users object    Some description
 * @apiSampleRequest /example
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {}
 */
router.post('/', function(req, res) {
    ExampleHandler.createUser(req.body, function(err, result) {
        if (err) {
            return res.status(400).json({error: err});
        }

        return res.json(result);
    });
});

module.exports = router;
