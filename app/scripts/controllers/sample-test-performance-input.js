'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleTestPerformanceInputCtrl
 * @description
 * # SampleTestPerformanceInputCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('SampleTestPerformanceInputCtrl', ['$state', '$scope', function ($state, $scope) {
    $state.current.data = {
      pageTitle: 'Performance test',
      title: 'Performance test',
      description: 'Performance test'
    };

    $scope.description = $state.current.count + " records generated in browser, Just for testing browser rendering DOM's capacity";

    var data = [];
    for (var i = 1; i <= $state.current.count; ++i) {
      data.push(i);
    }

    $scope.data = data;
  }]);
