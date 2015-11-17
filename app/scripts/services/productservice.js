'use strict';

/**
 * @ngdoc service
 * @name iconnectApp.productService
 * @description
 * # productService
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('ProductService',['$http', function ($http) {
    this.load = function (params) {
      return $http.get('api/products', {params:params});
    };

    this.loadById = function(productId){
      return $http.get('api/products/' + productId);
    };

    this.create = function(product){
      return $http.post('api/products', product);
    };

    this.update = function(productId, product){
      return $http.put('api/products/' + productId, product);
    };

    this.delete = function(productId){
      return $http.delete('api/products/' + productId);
    };
  }]);
