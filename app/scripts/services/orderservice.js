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

    this.delete = function(orderId){
      return $http.delete('api/orders/' + orderId);
    };
  }]);
