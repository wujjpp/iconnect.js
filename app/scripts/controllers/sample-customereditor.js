'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:CustomereditorCtrl
 * @description
 * # CustomereditorCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('CustomerEditorCtrl', ['$scope', '$modalInstance', '$validator', 'RegionService', 'customer',
    'CustomerService',
    function ($scope, $modalInstance, $validator, RegionService, customer, customerService) {

      $scope.customer = customer;

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

      //for initialize group checkbox list
      if (customer && _.isArray(customer.groups)) {
        _.each($scope.groups, function (group) {
          group.selected = _.some(customer.groups, function (o) {
            return o === group.groupNo;
          });
        });
      }

      //submit and cancel button
      //helper function for get selected group no.
      var getSelectedGroups = function(){
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

            if (customer.id) {//edit
              $scope.customer.groups = getSelectedGroups();
              customerService.update($scope.customer.id, $scope.customer);
            }
            else {//create
              $scope.customer.groups = getSelectedGroups();
              customerService.create($scope.customer);
            }
            $modalInstance.close($scope.customer);
          }).error(function () {
            //notification
          });
        },
        cancel: function () {
          $modalInstance.dismiss('cancel');
        }
      };
    }]);
