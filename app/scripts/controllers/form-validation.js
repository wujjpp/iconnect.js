'use strict';

angular.module('iconnectApp')
  .controller('FormValidationCtrl', ['$scope', '$state', '$validator', 'RegionService',
    function ($scope, $state, $validator, RegionService) {

      $scope.$on('$viewContentLoaded', function () {
        //Metronic.initAjax();
      });

      $state.current.data = {
        pageTitle: 'Form Validation',
        title: 'Form validation',
        description: 'Form validation sample page'
      };

      //==================================================================

      $scope.male = {id: 1};

      $scope.genders={
        male:$scope.male,
        female:{id:0}
      };

      $scope.regions = [];

      $scope.refreshRegions = function () {
        return RegionService.loadAllRegions().then(function (data) {
          $scope.regions = data;
        });
      };

      //Just test checkbox onChanged callback
      $scope.onCheckedChanged = function () {
        console.log('locked?' + $scope.customer.locked);
      };

      $scope.onRadioChanged = function () {
        console.log('Gender:+++++++');
        console.log($scope.customer.gender);
      };

      $scope.customer = {
        firstName: '',
        lastName: '',
        age: '',
        email: '',
        mobile: '',
        blog: '',
        region: '',
        birth: '',
        gender:$scope.male,
        locked: 'YES'
      };

      $scope.actions = {
        submit: function () {
          $validator.validate($scope, 'v1').success(function () {
            console.log('success');
          }).error(function () {
            console.log('error');
          }).then(function () {
            console.log($scope.customer);
          });
        },
        reset: function () {
          $validator.reset($scope, 'v1');
        }
      };

      //todo: should make a global function for handle delay call.
      _.defer(function () {
        Metronic.initAjax();
      });

    }]);
