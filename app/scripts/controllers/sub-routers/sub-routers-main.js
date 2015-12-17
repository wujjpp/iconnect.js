'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('SubRouterMainCtrl', ['$scope', '$state', function ($scope, $state) {

    $state.current.data = {
      pageTitle: 'Sub Router Main Page',
      title: 'Sub Router Main Page',
      description: 'The description of sub router main page'
    };

    $scope.generatedTime = new Date().toString();

    $scope.foo = function(){
      bootbox.alert("Function callback in SubRouterMainCtrl");
    };
  }]);

