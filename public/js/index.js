'use strict';

/* Controllers */

var mainApp = angular.module('mainApp', []);

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
//    $http.get('/get/answer/' + id).success(function(answer) {
//      $scope.currentAnswer = answer;
//    })
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
