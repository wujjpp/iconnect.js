'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:GlobalHeaderCtrl
 * @description
 * # GlobalHeaderCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('HeaderController', ['$scope', '$state', 'Layout', 'LoginService', function ($scope, $state, Layout, loginService) {
    $scope.$on('$includeContentLoaded', function () {
      Layout.initHeader();
    });

    $scope.logout = function () {
      bootbox.confirm("Are you sure logout?", function (result) {
        if (result) {
          loginService.logout();
          $state.go('login');
        }
      });
    };
  }]);
