'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:RadioCtrl
 * @description
 * # RadioCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('RadioCtrl', ['$state', '$scope', '$window', function ($state, $scope, $window) {
    $state.current.data = {
      pageTitle: 'Radio samples',
      title: 'Radio samples',
      description: 'Radio sample page'
    };

    $scope.selectedOption1 = 1;

    $scope.disabledRadio = true;

    $scope.male = 'Male';
    $scope.female = 'Female';
    $scope.selectedGender = 'Male';


    $scope.selectedOption = {};

    $scope.options = [
      {id: 1, name: 'option-1'},
      {id: 2, name: 'option-2'},
      {id: 3, name: 'option-3'},
      {id: 4, name: 'option-4'},
      {id: 5, name: 'option-5'},
      {id: 6, name: 'option-6'}
    ];

    $scope.selectedOption2 = {};

    $scope.onRadioChanged = function () {
      $window.alert('onRadioChanged fired and current selectedOption2 is:\n' + JSON.stringify($scope.selectedOption2));
    };

  }]);
