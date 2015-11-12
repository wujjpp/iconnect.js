'use strict';

/*
 * Author: Wu Jian Ping
 * */

/**
 * @ngdoc service
 * @name iconnectApp.localStorageService
 * @description
 * # localStorageService
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('localStorageService', ['$window', 'jsonSerializer', function ($window, serializer) {
    var storage = $window.localStorage;

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
