'use strict';

/* Controllers */

var indexApp = angular.module('indexApp', []);

indexApp.controller('indexCtrl', function($scope,$http) {
  $http.get('/someUrl').
    success(function(data, status, headers, config) {
    });

});