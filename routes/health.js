// ensure the NODE_ENV is set to 'test'
// this is helpful when you would like to change behavior when testing
process.env.NODE_ENV = 'test';

var express = require('express');
var router = express.Router();

/**
 * @api {get} /healthcheck get health of system
 * @apiName Healthcheck
 * @apiGroup System
 *
 * @apiSuccess {Object[]} result
 * @apiSuccess {String}   result.status    The status.
 * @apiSampleRequest /healthcheck
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "status": "OK"
 *     }
 */
router.get('/healthcheck', function healthcheck(req, res) {
    res.json({ status: 'OK' });
}) ;

module.exports = router;
