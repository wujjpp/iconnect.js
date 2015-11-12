'use strict';
/*
 * Author: Wu Jian Ping
 * */

 /**
 * @ngdoc service
 * @name iconnectApp.stateManager
 * @description
 * # stateManager
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('stateManager', ['sessionStorageService', function (storage) {
    var stateManagerKey = 'state-manager';

    this.set = function (key, object) {
      storage.set(getKeyName(key), object);
    };

    this.get = function (key) {
      return storage.get(getKeyName(key));
    };

    this.clear = function (key) {
      storage.clear(getKeyName(key));
    };

    this.contains = function (key) {
      return storage.contains(getKeyName(key));
    };

    var getKeyName = function(key){
      return stateManagerKey + '-' + key;
    };

  }]);
