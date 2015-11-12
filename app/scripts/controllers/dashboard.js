'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('DashboardCtrl', ['$scope', '$state', function ($scope, $state) {

    $state.current.data = {
      pageTitle: 'Dashboard',
      title: 'Dashboard',
      description: 'The description of dashboard page'
    };

    $scope.$on('$viewContentLoaded', function () {
      Metronic.initAjax();
    });
  }]);
