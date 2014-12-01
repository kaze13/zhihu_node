'use strict';

/* Controllers */

var mainApp = angular.module('mainApp', ['elasticsearch']);

mainApp.config(function($httpProvider) {
  //Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;

  //Remove the header used to identify ajax call  that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

mainApp.service('client', function(esFactory) {
  return esFactory({
    host: 'localhost:9200',
    log: 'trace'
  });
});



mainApp.controller('indexCtrl', function($scope, $http) {
  $scope.currentPage_ = 1;
  $scope.init = function() {
    $http.get('/get/answers/1/20').
      success(function(answers) {
        $scope.answers = answers;
      });
  };

  $scope.showAnswer = function(id) {
    var splited = id.split('/');
    id = splited[splited.length - 1];
    window.location.href = '/answer/' + id;
  };

  $scope.prevPage = function() {
    $scope.currentPage_ = $scope.currentPage_ - 1;
    $http.get('/get/answers/' + $scope.currentPage_ + '/20').
      success(function(answers) {
        $scope.answers = answers;
      });
  };

  $scope.nextPage = function() {
    $scope.currentPage_ = $scope.currentPage_ + 1;
    $http.get('/get/answers/' + $scope.currentPage_ + '/20').
      success(function(answers) {
        $scope.answers = answers;
      });
  };
});

mainApp.controller('searchCtrl', function($scope, client, esFactory) {
  client.cluster.state({
    metric: [
      'cluster_name',
      'nodes',
      'master_node',
      'version'
    ]
  })
    .then(function(resp) {
      $scope.clusterState = resp;
      $scope.error = null;
    })
    .catch(function(err) {
      $scope.clusterState = null;
      $scope.error = err;
      // if the err is a NoConnections error, then the client was not able to
      // connect to elasticsearch. In that case, create a more detailed error
      // message
      if(err instanceof esFactory.errors.NoConnections) {
        $scope.error = new Error('Unable to connect to elasticsearch. ' +
          'Make sure that it is running and listening at http://localhost:9200');
      }
    });

});

mainApp.convertEsData = function(esData) {
  var results = [];
  var esSource = esData.hits.hits;
  for(var i = 0, len = esSource.length; i < len; ++i) {
    results.push(esSource[i]._source);
  }
  return results;
};