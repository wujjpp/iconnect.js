'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleOrderCtrl
 * @description
 * # SampleOrderCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('OrderCtrl', ['$scope', '$state', 'paginator', 'controllerStateManager', 'OrderService',
    function ($scope, $state, paginator, controllerStateManager, orderService) {

      $state.current.data = {
        pageTitle: 'Maintain Order',
        title: 'Maintain Order',
        description: 'The description of this page'
      };

      $scope.searchCriteria = controllerStateManager.get('searchCriteria', {companyName: '', contactName: ''});

      $scope.pagination = controllerStateManager.get('pagination', paginator.create());


      $scope.onPageChanged = function () {
        loadData();
      };

      //for portlet actions
      $scope.isSearchAreaOpened = controllerStateManager.get('isSearchAreaOpened') || false;

      //open or close search area
      $scope.toggleSearchArea = function () {
        $scope.isSearchAreaOpened = !$scope.isSearchAreaOpened;
        controllerStateManager.set('isSearchAreaOpened', $scope.isSearchAreaOpened);
      };

      //for search action
      $scope.search = function () {
        //reset page index to 1
        $scope.pagination.page = 1;
        loadData();
      };

      //for reset action
      $scope.reset = function () {
        $scope.searchCriteria = {
          companyName: '',
          contactName: ''
        };
        loadData();
      };

      var orders = [];
      $scope.orders = orders;

      var loadData = function () {
        var params = _.extend({}, $scope.searchCriteria);

        _.extend(params, $scope.pagination.getPagerParams());

        //using controllerStateManager to saving state
        controllerStateManager.set('pagination', $scope.pagination);
        controllerStateManager.set('searchCriteria', $scope.searchCriteria);


        orderService.load(params).then(function (response) {
          //setup paged data
          $scope.orders = response.data;
          //setup total count returned by server
          $scope.pagination.count = response.count;
        });
      };


      loadData();

      $scope.toogle = function (order) {
        order.isOpen = !order.isOpen;
      };

      $scope.delete = function (orderId) {
        //use bootbox plugin to display a confirm dialog
        bootbox.confirm("Are you sure delete this order?", function (result) {
          if (result) {//if user clicked ok
            orderService.delete(orderId);//call service to perform delete operation
            toastr.success('Order deleted successfully!', 'Successfully');//show toastr message
            loadData();//refresh data
          }
        });
      };

    }]);
