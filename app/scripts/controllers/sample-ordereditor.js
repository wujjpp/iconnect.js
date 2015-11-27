'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleOrdereditorCtrl
 * @description
 * # SampleOrdereditorCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('OrderEditorCtrl', ['$state', '$stateParams', '$scope', '$uibModal', '$validator', 'OrderService',
    function ($state, $stateParams, $scope, $uibModal, $validator, orderService) {

      $state.current.data = {
        pageTitle: $stateParams.orderId ? 'Edit Order' : 'Create Order',
        title: $stateParams.orderId ? 'Edit Order' : 'Create Order',
        description: 'The description of this page'
      };

      $scope.order = {
        orderDetails: []
      };

      /*
       {
       orderId: '1',
       companyName: '2',
       contactName: '3',
       employeeName: '4',
       orderDate: '2015-01-01',
       requiredDate: '2015-02-01',
       shippedDate: '2015-03-01',
       freight: '10.5',
       shipName: '5',
       shipAddress: '6',
       shipCity: '7',
       shipPostalCode: '8',
       shipCountry: '9',
       orderDetails: [
       {detailId: '1', productId: '1', productName: 'product - 1', unitPrice: '10', quantity: '10'},
       {detailId: '2', productId: '2', productName: 'product - 2', unitPrice: '10', quantity: '10'},
       {detailId: '3', productId: '3', productName: 'product - 3', unitPrice: '10', quantity: '10'},
       {detailId: '4', productId: '4', productName: 'product - 4', unitPrice: '10', quantity: '10'},
       {detailId: '', productId: '5', productName: 'product - 5', unitPrice: '10', quantity: '10'},
       {detailId: '', productId: '6', productName: 'product - 6', unitPrice: '10', quantity: '10'},
       {detailId: '', productId: '7', productName: 'product - 7', unitPrice: '10', quantity: '10'},
       {detailId: '', productId: '8', productName: 'product - 8', unitPrice: '10', quantity: '10'},
       {detailId: '', productId: '9', productName: 'product - 9', unitPrice: '10', quantity: '10'}
       ]
       };
       */

      if ($stateParams.orderId) {
        orderService.loadById($stateParams.orderId).then(function (response) {
          $scope.order = response;
        });
      }

      $scope.deleteItem = function (item) {
        if (item.detailId) {
          item.isDeleted = true;
        }
        else {
          bootbox.confirm("Are you sure delete this item?", function (result) {
            if (result) {//if user clicked ok
              //NOTE: MUST use $apply function to force fire collection changed event.
              $scope.$apply(function () {
                $scope.order.orderDetails = _.reject($scope.order.orderDetails, function (o) {
                  return o === item;
                });
              });
            }
          });
        }
      };

      $scope.editItem = function (item) {
        item.isEditing = true;
      };

      $scope.saveItem = function (item) {
        item.isChanged = true;
        item.isEditing = false;
      };

      $scope.restoreItem = function (item) {
        if (item.detailId) {
          item.isDeleted = false;
        }
      };

      $scope.addItem = function () {
        var dialog = $uibModal.open({
          templateUrl: 'views/sample-order-adddetail.html',
          controller: 'AddOrderDetailCtrl',

          resolve: {
            customer: function () {
              return {
                gender: 0
              };
            }
          }
        });

        dialog.result.then(function (item) {
          item.isNew = true;
          $scope.order.orderDetails.push(item);
        }, function () {
        });
      };

      $scope.actions = {
        submit: function () {
          $validator.validate($scope, 'v1').success(function () {
            //Prepare order data before calling service
            //Step 1, get all property of order instance except 'orderDetails'
            var order = _.omit(angular.copy($scope.order), 'orderDetails');

            //Step2, get all changed items, including new added, updated, deleted.
            var orderDetails = _.chain($scope.order.orderDetails).filter(function(o){
              return o.isNew || o.isChanged || o.isDeleted;
            }).map(function(o){
              return _.omit(o, 'isEditing');
            }).value();

            //Step3, set necessary orderDetails(New, Update, Delete) list for order
            order.orderDetails = orderDetails;

            if (order.orderId) {//edit
              orderService.update(order.orderId, order);
              toastr.success('Order updated successfully!', 'Successfully');
              $state.go('authorised.order');
            }
            else {//create
              orderService.create(order);
              toastr.success('Order created successfully!', 'Successfully');
              $state.go('authorised.order');
            }
          }).error(function () {
            //notification
          });
        },
        cancel: function () {
          $state.go('authorised.order');
        }
      };
    }]);
