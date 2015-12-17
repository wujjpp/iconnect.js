'use strict';


angular.module('iconnectApp')
  .controller('SubRouterPage2Ctrl', ['$scope', '$state', function ($scope, $state) {

    $state.current.data = {
      pageTitle: 'Sub Router Page2',
      title: 'Sub Router Page2',
      description: 'The description of sub router page2'
    };

    $scope.generatedTime = new Date().toString();

    $scope.foo = function(){
      bootbox.alert(JSON.stringify($state.current));
    };
  }]);

