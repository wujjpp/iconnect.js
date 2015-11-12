'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:CheckboxCtrl
 * @description
 * # CheckboxCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('CheckboxCtrl', ['$state', '$scope', '$window', function ($state, $scope, $window) {

    $state.current.data = {
      pageTitle: 'Checkbox samples',
      title: 'Checkbox samples',
      description: 'Checkbox sample page'
    };

    $scope.checked = true;

    $scope.disableCheckbox = true;

    $scope.checked2 = true;
    $scope.$watch('checked2', function () {
      $('#lblChecked2').pulsate({
        color: "#bf1c56",
        repeat: false
      });
    });


    $scope.trueValue = 'YES';
    $scope.falseValue = 'NO';
    $scope.checkedValue = '';
    $scope.$watch('checkedValue', function () {
      $('#lblCheckedValue').pulsate({
        color: "#bf1c56",
        repeat: false
      });
    });


    $scope.trueObject = {
      id: 1,
      name: 'foo'
    };
    $scope.falseObject = {
      id: 2,
      name: 'bar'
    };

    $scope.checkedObject = {};
    $scope.$watch('checkedObject', function () {
      $('#lblCheckedObject').pulsate({
        color: "#bf1c56",
        repeat: false
      });
    }, true);

    $scope.checked3 = true;
    $scope.onChangeCallback = function () {
      $window.alert('onChange event fired \n$scope.checked3:' + $scope.checked3);
    };


    $scope.items = [
      {
        id: 1,
        name: 'admin',
        description: 'admin group',
        selected: false
      },
      {
        id: 2,
        name: 'users',
        description: 'users group',
        selected: false
      },
      {
        id: 1,
        name: 'everyone',
        description: 'everyone group',
        selected: false
      },
    ];

    $scope.selectedGroups = _.filter($scope.items, function (o) {
      return o.selected;
    });

  }]);
