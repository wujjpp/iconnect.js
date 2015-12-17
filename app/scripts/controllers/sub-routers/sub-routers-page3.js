'use strict';

angular.module('iconnectApp')
  .controller('SubRouterPage3Ctrl', ['$scope', '$state', function ($scope, $state) {

    $state.current.data = {
      pageTitle: 'Sub Router Page3',
      title: 'Sub Router Page3',
      description: 'The description of sub router page3'
    };

    $scope.generatedTime = new Date().toString();

    $scope.foo = function(){
      bootbox.alert(JSON.stringify($state.current));
    };
  }]);

