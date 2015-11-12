'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:GlobalFooterCtrl
 * @description
 * # GlobalFooterCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('FooterController', ['$scope','Layout', function ($scope, Layout) {
    $scope.$on('$includeContentLoaded', function () {
      Layout.initFooter(); // init footer
    });
  }]);
