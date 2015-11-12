'use strict';

/*
 * Author: Wu Jian Ping
 * */

/**
 * @ngdoc service
 * @name iconnectApp.cookieStorageService
 * @description
 * # cookieStorageService
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('cookieStorageService', ['$cookies', 'jsonSerializer', function ($cookies, serializer) {

    this.set = function (key, object) {
      $cookies.put(key, serializer.serialize(object));
    };

    this.get = function (key) {
      var s = $cookies.get(key);
      if (s) {
        return serializer.deserialize(s);
      }
    };

    this.clear = function (key) {
      $cookies.remove(key);
    };

    this.contains = function (key) {
      return this.get(key) !== undefined;
    };

  }]);
