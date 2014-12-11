'use strict';

// set up ddp over websocket connection to meteor backend.
window.DDP = require('../../bower_components/ddp.js/src/ddp.js');// jshint ignore:line
window.Q = require('../../bower_components/q/q.js');//jshint ignore:line
var Asteroid = require('../../bower_components/asteroid/dist/asteroid.browser.js');
var ddpConn = new Asteroid('localhost:3000');
console.log(ddpConn);

require('angular/angular');

var dmApp = angular.module('dmApp', []);

//services

//controllers
require('./controllers/dm_controller')(dmApp, ddpConn);
