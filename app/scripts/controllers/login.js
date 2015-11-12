'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('LoginCtrl', ['$scope','$rootScope','$state', function ($scope, $rootScope, $state) {

    $scope.$on('$viewContentLoaded', function () {

      $rootScope.loginService.logout();

      _.defer(function () {
        Metronic.init();

        $.backstretch([
          "images/login/1.jpg",
          "images/login/2.jpg",
          "images/login/3.jpg",
          "images/login/4.jpg",
        ], {
          fade: 1000,
          duration: 8000
        });
      });

    });

    $scope.doLogin = function(){
      $.backstretch("destroy");
      $rootScope.loginService.login();
      $state.go('authorised.dashboard');
    };
  }]);
