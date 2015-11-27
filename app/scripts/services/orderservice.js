'use strict';

/**
 * @ngdoc service
 * @name iconnectApp.OrderService
 * @description
 * # OrderService
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('OrderService', ['$http', function ($http) {
    this.load = function (params) {
      return $http.get('api/orders', {params:params});
    };

    this.loadById = function(orderId){
      return $http.get('api/orders/' + orderId);
    };

    this.delete = function(orderId){
      return $http.delete('api/orders/' + orderId);
    };

    this.create = function(order){
      return $http.post('api/orders', order);
    };

    this.update = function(orderId, order){
      return $http.put('api/orders/' + orderId, order);
    };
  }]);
