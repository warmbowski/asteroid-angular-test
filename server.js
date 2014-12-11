'use strict';
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/build/'));

app.set('port', process.env.PORT || 3333);
app.listen(app.get('port'), function() {
  console.log('Server listening on port %d', app.get('port'));
});
