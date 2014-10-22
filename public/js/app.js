'use strict';

/* Controllers */

var mainApp = angular.module('mainApp', []);

mainApp.controller('indexCtrl', function($scope, $http) {
  var self_ = this;
  this.currentPage_  = 1;
  $scope.currentAnswers = {ask_title:'asd'};
  $http.get('/get/answers/1/20').
    success(function(answers) {
      $scope.answers = answers;
    });

  $scope.showAnswer = function(id){
	$http.get('/get/answer/' + id).success(function(answer){
		$scope.currentAnswer = answer;
	})

  };

	

  $scope.prevPage = function(){
    $scope.currentPage_ = $scope.currentPage_ - 1;
    $http.get('/get/answers/'+self_.currentPage_+'/20').
      success(function(answers, status, headers, config) {
        $scope.answers = answers;
      });
  };

  $scope.nextPage = function(){
    $scope.currentPage_ = $scope.currentPage_ + 1;
    $http.get('/get/answers/'+self_.currentPage_+'/20').
      success(function(answers, status, headers, config) {
        $scope.answers = answers;
      });
  };

});
