'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleTestPerformanceCtrl
 * @description
 * # SampleTestPerformanceCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('SampleTestPerformanceCtrl', ['$state', '$scope','$http', function ($state, $scope, $http) {
    $state.current.data = {
      pageTitle: 'Performance test',
      title: 'Performance test',
      description: 'Performance test'
    };
    var count = $state.params.count;
    $scope.description = count + " records generated at " + $state.current.dataFrom;

    if ($state.current.dataFrom === 'local') {
      var data = [];
      for (var i = 1; i <= count; ++i) {
        var item = {id: i};
        for (var j = 1; j <= 10; j++) {
          item['column' + j] = 'Data-' + i + '-' + j;
        }
        data.push(item);
      }
      $scope.data = data;
    }
    else {
      $http.get('api/test', {params: {count: count}}).then(function (response) {
        $scope.data = response;
      }, function (response) {
        $window.alert(response);
      });
    }
  }]);
