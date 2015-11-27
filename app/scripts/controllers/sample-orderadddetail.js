'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleAddorderdetailCtrl
 * @description
 * # SampleAddorderdetailCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('AddOrderDetailCtrl', ['$scope', '$modalInstance', '$validator', 'ProductService',
    function ($scope, $modalInstance, $validator, productService) {

      $scope.refreshProduct = function(){
        return productService.load().then(function (response) {
          $scope.products = response;
        });
      };

      $scope.product = {};

      $scope.actions = {
        submit: function () {
          $validator.validate($scope, 'v1').success(function () {
            var product = angular.copy($scope.product.selected);
            $modalInstance.close(product);
          }).error(function () {
            //notification
          });
        },
        cancel: function () {
          $modalInstance.dismiss('cancel');
        }
      };
    }]);
