'use strict';

/* Controllers */

var mainApp = angular.module('mainApp', []);

mainApp.controller('indexCtrl', function($scope, $http) {
  var self_ = this;
  this.currentPage_  = 1;
  $http.get('/get/answers/1/20').
    success(function(answers, status, headers, config) {
      $scope.answers = answers;
    });

  $scope.showAnswer = function(){

  };

  $('#prev-link').click(function(){
    self_.currentPage_ = self_.currentPage_ - 1;
    $http.get('/get/answers/'+self_.currentPage_+'/20').
      success(function(answers, status, headers, config) {
        $scope.answers = answers;
      });
  });

  $('#next-link').click(function(){
    self_.currentPage_ = self_.currentPage_ + 1;
    $http.get('/get/answers/'+self_.currentPage_+'/20').
      success(function(answers, status, headers, config) {
        $scope.answers = answers;
      });
  });

});