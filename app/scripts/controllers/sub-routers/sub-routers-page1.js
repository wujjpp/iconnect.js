'use strict';


angular.module('iconnectApp')
  .controller('SubRouterPage1Ctrl', ['$scope', '$state', function ($scope, $state) {

    $state.current.data = {
      pageTitle: 'Sub Router Page1',
      title: 'Sub Router Page1',
      description: 'The description of sub router page1'
    };

    $scope.generatedTime = new Date().toString();

    $scope.foo = function(){
      bootbox.alert(JSON.stringify($state.current));
    };
  }]);

