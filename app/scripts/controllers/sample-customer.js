'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:CustomerCtrl
 * @description
 * # CustomerCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('CustomerCtrl', ['$scope', '$state', '$location', 'paginator', 'CustomerService', 'RegionService',
    '$uibModal','controllerStateManager',
    function ($scope, $state, $location, paginator, customerService, RegionService, $uibModal, controllerStateManager) {

      $state.current.data = {
        pageTitle: 'Maintain Customer',
        title: 'Maintain Customer',
        description: 'The description of this page'
      };

      $scope.pagination = controllerStateManager.get('pagination', paginator.create());

      //for region dropdown
      $scope.regions = [];
      $scope.refreshRegions = function () {
        return RegionService.loadAllRegions().then(function (response) {
          $scope.regions = response;
        });
      };

      //query parameters;
      $scope.searchCriteria = controllerStateManager.get('searchCriteria', {
        companyName: '',
        contactName: '',
        region: '',
        status: []
      });

      //for portlet actions
      $scope.isSearchAreaOpened = controllerStateManager.get('isSearchAreaOpened') || false;

      //open or close search area
      $scope.toggleSearchArea = function () {
        $scope.isSearchAreaOpened = !$scope.isSearchAreaOpened;
        controllerStateManager.set('isSearchAreaOpened', $scope.isSearchAreaOpened);
      };

      //reset search criteria then refresh
      $scope.reset = function () {
        $scope.searchCriteria = {
          companyName: '',
          contactName: '',
          region: '',
          status: []
        };
        _.each($scope.status, function (o) {
          o.selected = false;
        });

        loadData();
      };

      //for status checkbox list
      $scope.status = [
        {name: 'Pending', value: 'pending', selected: false},
        {name: 'Suspended', value: 'suspended', selected: false},
        {name: 'Blocked', value: 'blocked', selected: false},
        {name: 'Approved', value: 'approved', selected: false}
      ];

      _.each($scope.status, function(ele){
        ele.selected = _.contains($scope.searchCriteria.status, ele.value);
      });

      //paginator callback
      $scope.onPageChanged = function () {
        loadData();
      };

      //for search button
      $scope.search = function () {
        //reset page index to 1
        $scope.pagination.page = 1;
        loadData();
      };

      //for create button
      $scope.create = function () {
        var dialog = $uibModal.open({
          templateUrl: 'views/sample-customereditor.html',
          controller: 'CustomerEditorCtrl',
          size: 'lg',
          resolve: {
            customer: function () {
              return {
                gender:0
              };
            }
          }
        });

        dialog.result.then(function () {
          //display toastr message
          toastr.success('Customer created successfully!', 'Successfully');
          //refresh data
          loadData();
        });
      };

      //for edit button
      $scope.edit = function (customer) {
        var dialog = $uibModal.open({
          templateUrl: 'views/sample-customereditor.html',
          controller: 'CustomerEditorCtrl',
          size: 'lg',
          resolve: {
            customer: function () {
              return angular.copy(customer);
            }
          }
        });

        dialog.result.then(function (changedObj) {
          //just merge changed data to original one, the angular will auto update UI
          _.extend(customer, changedObj);
          //display toastr message
          toastr.success('Customer updated successfully!', 'Successfully');
        });
      };

      //for delete button
      $scope.delete = function (id) {
        //use bootbox plugin to display a confirm dialog
        bootbox.confirm("Are you sure delete this customer?", function (result) {
          if (result) {//if user clicked ok
            customerService.delete(id);//call service to perform delete operation
            toastr.success('Customer deleted successfully!', 'Successfully');//show toastr message
            loadData();//refresh data
          }
        });
      };

      //for load data
      var customers = [];
      $scope.customers = customers;

      var loadData = function () {
        //init normal parameters
        var params = _.extend({}, $scope.searchCriteria);
        //init status parameter (list)
        var filteredStatus = _.filter($scope.status, function (item) {
          return item.selected;
        }).map(function (item) {
          return item.value;
        });
        //save search parameters to $scope.searchCriteria
        $scope.searchCriteria = _.extend(params, {status: filteredStatus});

        _.extend(params, $scope.pagination.getPagerParams());

        //using controllerStateManager to saving state
        controllerStateManager.set('pagination', $scope.pagination);
        controllerStateManager.set('searchCriteria', $scope.searchCriteria);

        customerService.load(params).then(function (response) {
          $scope.customers = response.data;
          //setup total count returned by server
          $scope.pagination.count = response.count;
        });
      };

      loadData();
    }]);
