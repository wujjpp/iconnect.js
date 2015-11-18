'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleOrderCtrl
 * @description
 * # SampleOrderCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('OrderCtrl', ['$scope', '$state', 'OrderService', function ($scope, $state, orderService) {

    $state.current.data = {
      pageTitle: 'Maintain Order',
      title: 'Maintain Order',
      description: 'The description of this page'
    };

    var orders = [];
    $scope.orders = orders;


    var loadData = function(){
      orderService.load().then(function(response){
        $scope.orders = response;
      });
    };


    loadData();

    $scope.toogle = function(order){
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
