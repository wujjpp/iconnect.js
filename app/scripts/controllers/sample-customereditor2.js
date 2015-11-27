'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:CustomereditorCtrl
 * @description
 * # CustomereditorCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('CustomerEditor2Ctrl', ['$state', '$stateParams', '$scope', '$validator', 'RegionService',
    'CustomerService',
    function ($state, $stateParams, $scope, $validator, RegionService, customerService) {

      $state.current.data = {
        pageTitle: $stateParams.id ? 'Edit Customer': 'Create Customer',
        title:  $stateParams.id ? 'Edit Customer': 'Create Customer',
        description: 'The description of this page'
      };

      $scope.customer = {};

      if ($stateParams.id) {//update customer
        customerService.loadById($stateParams.id).then(function (response) {
          $scope.customer = response;
          //for initialize group checkbox list
          if ($scope.customer && _.isArray($scope.customer.groups)) {
            _.each($scope.groups, function (group) {
              group.selected = _.some($scope.customer.groups, function (o) {
                return o === group.groupNo;
              });
            });
          }
        });
      }
      //for region dropdown
      $scope.regions = [];

      $scope.refreshRegions = function () {
        return RegionService.loadAllRegions().then(function (response) {
          $scope.regions = response;
        });
      };

      //for status radio list
      $scope.groups = [
        {groupNo: 'admin', groupName: 'Admin', selected: false},
        {groupNo: 'user', groupName: 'User', selected: false},
        {groupNo: 'other', groupName: 'Other', selected: false}
      ];



      //submit and cancel button
      //helper function for get selected group no.
      var getSelectedGroups = function () {
        return _.chain($scope.groups)
          .filter(function (o) {
            return o.selected;
          }).map(function (o) {
            return o.groupNo;
          }).value();
      };
      $scope.actions = {
        submit: function () {
          $validator.validate($scope, 'v1').success(function () {
            if ($scope.customer.id) {//edit
              $scope.customer.groups = getSelectedGroups();
              customerService.update($scope.customer.id, $scope.customer);
              toastr.success('Customer updated successfully!', 'Successfully');
              $state.go('authorised.customer');
            }
            else {//create
              $scope.customer.groups = getSelectedGroups();
              customerService.create($scope.customer);
              toastr.success('Customer created successfully!', 'Successfully');
              $state.go('authorised.customer');
            }
          }).error(function () {
            //notification
          });
        },
        cancel: function () {
          $state.go('authorised.customer');
        }
      };

    }]);
