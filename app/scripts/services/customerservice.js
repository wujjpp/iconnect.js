'use strict';

/**
 * @ngdoc service
 * @name iconnectApp.CustomerService
 * @description
 * # CustomerService
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('CustomerService', ['$http', function ($http) {
    this.load = function (params) {
      return $http.get('api/customers', {params:params});
    };

    this.loadById = function(id){
      return $http.get('api/customers/' + id);
    };

    this.create = function(customer){
      return $http.post('api/customers', customer);
    };

    this.update = function(id, customer){
      return $http.put('api/customers/' + id, customer);
    };

    this.delete = function(id){
      return $http.delete('api/customers/' + id);
    };
  }]);
