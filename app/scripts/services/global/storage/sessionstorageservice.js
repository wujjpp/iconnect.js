'use strict';

/*
 * Author: Wu Jian Ping
 * */

 /**
 * @ngdoc service
 * @name iconnectApp.sessionStorageService
 * @description
 * # sessionStorageService
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('sessionStorageService', ['$window', 'jsonSerializer', function ($window, serializer) {
    var storage = $window.sessionStorage;

    this.set = function (key, object) {
      storage.setItem(key, serializer.serialize(object));
    };

    this.get = function (key) {
      return serializer.deserialize(storage.getItem(key));
    };

    this.clear = function (key) {
      storage.removeItem(key);
    };

    this.contains = function (key) {
      return this.get(key) !== undefined;
    };

  }]);
