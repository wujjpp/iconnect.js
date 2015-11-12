'use strict';
/*
* Author: Wu Jian Ping
* */

/**
 * @ngdoc service
 * @name iconnectApp.Global/Interceptors/blockUI
 * @description
 * # Global/Interceptors/blockUI
 * Factory in the iconnectApp.
 */
angular.module('iconnectApp')
  .factory('blockUI', ['$q', '$injector', function ($q, $injector) {
    return {
      'request': function (config) {
        if ($injector.get('$http').pendingRequests.length < 1) {
          Metronic.blockUI();
        }
        return config;
      },

      'requestError': function (rejection) {
        if ($injector.get('$http').pendingRequests.length < 1) {
          Metronic.unblockUI();
        }
        return $q.reject(rejection);
      },

      'response': function (response) {
        if ($injector.get('$http').pendingRequests.length < 1) {
          Metronic.unblockUI();
        }
        return response;
      },

      'responseError': function (rejection) {
        if ($injector.get('$http').pendingRequests.length < 1) {
          Metronic.unblockUI();
        }
        return $q.reject(rejection);
      }
    };
  }
  ]);
