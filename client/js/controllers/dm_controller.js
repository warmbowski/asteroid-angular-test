'use strict';

module.exports = function(app, ddpConn) {
  app.controller('dmCtrl', ['$scope', function($scope) {
    var sub = ddpConn.subscribe('dogProfiles');
    console.log(sub);
    
    var coll = ddpConn.getCollection('dogs');
    console.log(coll);
    
    $scope.hello = 'World';
  }]);
};