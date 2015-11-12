'use strict';
/*
 * Author: Wu Jian Ping
 * */

/**
 * @ngdoc service
 * @name iconnectApp.controllerStateManager
 * @description
 * # controllerStateManager
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('controllerStateManager', ['$state', 'stateManager', function ($state, stateManager) {
    this.set = function (key, object) {
      stateManager.set(getKeyName(key), object);
    };

    this.get = function (key, defaults) {
      if (defaults !== undefined) {
        return _.extend(defaults, stateManager.get(getKeyName(key)));
      }
      return stateManager.get(getKeyName(key));
    };

    this.remove = function (key) {
      stateManager.clear(getKeyName(key));
    };

    var getKeyName = function (key) {
      return $state.current.controller + '-state-' + key;
    };
  }]);
