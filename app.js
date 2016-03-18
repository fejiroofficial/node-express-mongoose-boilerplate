var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var errorHandler = require('errorhandler');
var config = require('config');
var routes = require('./routes');
var expressLogger = require('./lib/meta-logger')('YourAppName').expressLogger;

var app = express();

var httpPort = config.get('port');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.set('port', httpPort);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(errorHandler());
app.use(cors());
app.use(expressLogger);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

module.exports = app;
