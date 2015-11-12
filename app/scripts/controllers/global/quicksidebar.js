'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:GlobalQuicksidebarCtrl
 * @description
 * # GlobalQuicksidebarCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('QuickSidebarController', ['$scope','$timeout', function ($scope, $timeout) {
    $scope.$on('$includeContentLoaded', function () {
      $timeout(function () {
        QuickSidebar.init(); // init quick sidebar
      }, 2000);
    });
  }]);
