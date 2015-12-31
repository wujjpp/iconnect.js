'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleTestPerformanceDropdownCtrl
 * @description
 * # SampleTestPerformanceDropdownCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('SampleTestPerformanceDropdownCtrl', ['$state', '$scope', '$http', function ($state, $scope, $http) {
    $state.current.data = {
      pageTitle: 'Performance test',
      title: 'Performance test',
      description: 'Performance test'
    };

    $scope.description = '10 dropdown and each have 100 records';

    $scope.selectedObjects =
    {
      selectedItem1: {},
      selectedItem2: {},
      selectedItem3: {},
      selectedItem4: {},
      selectedItem5: {},
      selectedItem6: {},
      selectedItem7: {},
      selectedItem8: {},
      selectedItem9: {},
      selectedItem10: {}
    };

    var list = [];

    for (var i = 1; i <= 10; ++i) {
      var items = [];
      for (var j = 1; j <= 100; ++j) {
        items.push({
          value: (i - 1) * 100 + j,
          text: 'item-' + ((i - 1) * 100 + j)
        });
      }
      list.push(items);
    }

    $scope.list = list;

  }]);
