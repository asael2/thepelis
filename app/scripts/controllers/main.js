'use strict';

/**
 * @ngdoc function
 * @name thepelisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thepelisApp
 */
angular.module('thepelisApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });