'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleTestPerformanceRemoteCtrl
 * @description
 * # SampleTestPerformanceRemoteCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('SampleTestPerformanceRemoteCtrl', ['$state', '$scope', '$http', '$window', function ($state, $scope, $http, $window) {
    $state.current.data = {
      pageTitle: 'Performance test',
      title: 'Performance test',
      description: 'Performance test'
    };
    $scope.description = $state.current.count + ' records loaded from remote server';

    var data = [];

    $scope.data = data;

    $http.get('api/test', {params: {count: $state.current.count}}).then(function (response) {
      $scope.data = response;
    }, function (response) {
      $window.alert(response);
    });
  }]);
