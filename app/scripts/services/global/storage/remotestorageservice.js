'use strict';

/*
 * Author: Wu Jian Ping
 * */

/**
 * @ngdoc service
 * @name iconnectApp.remoteStorageService
 * @description
 * # remoteStorageService
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('remoteStorageService', ['$http', function ($http) {

    this.set = function (key, object) {
      return $http.post('api/storage/' + key, object);
    };

    this.get = function (key) {
      return $http.get('api/storage/' + key);
    };

    this.clear = function (key) {
      return $http.delete('api/storage/' + key);
    };

    this.contains = function (key) {
      return this.get(key) !== undefined;
    };
  }]);
