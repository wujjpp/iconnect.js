'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleOrdereditorCtrl
 * @description
 * # SampleOrdereditorCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('OrderEditorCtrl', ['$state', '$stateParams', '$scope', 'paginator', '$uibModal', '$validator', 'OrderService',
    function ($state, $stateParams, $scope, paginator, $uibModal, $validator, orderService) {

      $state.current.data = {
        pageTitle: $stateParams.orderId ? 'Edit Order' : 'Create Order',
        title: $stateParams.orderId ? 'Edit Order' : 'Create Order',
        description: 'The description of this page'
      };

      $scope.pagination = paginator.create();

      $scope.order = {
        orderDetails: []
      };

      $scope.pagedItems = [];

      if ($stateParams.orderId) {
        orderService.loadById($stateParams.orderId).then(function (response) {
          $scope.order = response;
          loadItems();
        });
      }


      //for processing child record's pagination
      var loadItems = function () {
        //calc start and end index
        var start = ($scope.pagination.page - 1) * $scope.pagination.size;
        var end = $scope.pagination.page * $scope.pagination.size;

        //filter paged data
        $scope.pagedItems = [];
        _.each($scope.order.orderDetails, function (e, i) {
          if (i >= start && i < end) {
            $scope.pagedItems.push(e);
          }
        });

        //setup total count
        $scope.pagination.count = $scope.order.orderDetails.length;
      };

      $scope.onPageChanged = function () {
        loadItems();
      };

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

                loadItems();
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

          loadItems();
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
            var orderDetails = _.chain($scope.order.orderDetails).filter(function (o) {
              return o.isNew || o.isChanged || o.isDeleted;
            }).map(function (o) {
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
