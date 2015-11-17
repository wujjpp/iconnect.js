'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:SampleProductCtrl
 * @description
 * # SampleProductCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('ProductCtrl', ['$scope','$state', 'ProductService', function ($scope, $state, productService) {

    $state.current.data = {
      pageTitle: 'Maintain Product',
      title: 'Maintain Product',
      description: 'The description of this page'
    };

    var products = [];
    $scope.products = products;



    productService.load().then(function(response){
      $scope.products = response;
    });

    var selectedProduct;
    $scope.edit = function(product){
      selectedProduct = angular.copy(product);
      product.isEdting = true;
    };

    $scope.save = function(product){
      var tmp = _.omit(product, 'isEdting');
      productService.update(product.productId, tmp).then(function(){
        product.isEdting = false;
      });
    };

    $scope.cancel = function(product){
      angular.copy(selectedProduct, product);
      product.isEdting = false;
    };

  }]);
