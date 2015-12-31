'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleTestPerformanceLocalCtrl
 * @description
 * # SampleTestPerformanceLocalCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('SampleTestPerformanceLocalCtrl', ['$state', '$scope','$http', function ($state, $scope) {
    $state.current.data = {
      pageTitle: 'Performance test',
      title: 'Performance test',
      description: 'Performance test'
    };

    $scope.description = $state.current.count + ' records generated in browser';

    var data = [];
    for (var i = 1; i <= $state.current.count; ++i) {
      var item = {id: i};
      for (var j = 1; j <= 10; j++) {
        item['column' + j] = 'Data-' + i + '-' + j;
      }
      data.push(item);
    }

    $scope.data = data;
  }]);
