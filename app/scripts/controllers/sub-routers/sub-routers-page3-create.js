'use strict';

angular.module('iconnectApp')
  .controller('SubRouterPage3CreateCtrl', ['$scope', '$state', function ($scope, $state) {

    $state.current.data = {
      pageTitle: 'Sub Router Page3 - Create',
      title: 'Sub Router Page3 - Create',
      description: 'The description of sub router page3 - Create'
    };

    $scope.back = function(){
      $state.previous();
    };
  }]);

