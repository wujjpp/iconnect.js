'use strict';

/*
 * Author: Wu Jian Ping
 * */

 /**
 * @ngdoc service
 * @name iconnectApp.responseParser
 * @description
 * # responseParser
 * Factory in the iconnectApp.
 */
angular.module('iconnectApp')
  .factory('responseParser', ['$q', function ($q) {
    return {
      'request': function (config) {
        return config;
      },

      'requestError': function (rejection) {
        return $q.reject(rejection);
      },

      'response': function (response) {
        //prepare 'real' data for business layer
        if(response.config.url.toLowerCase().indexOf('api') === 0){
          if(response.data.error){
            toastr.error(response.data.error.message, response.data.error.code);
          }
          return response.data;
        }
        return response;
      },

      'responseError': function (rejection) {
        switch(rejection.status){
          case 404:
            toastr.error('Not Found: ' + rejection.config.url, 'Error');
                break;
          case 401:
            toastr.error('Unauthorized', 'Error');
                break;
          case 402:
            toastr.error('Forbidden', 'Error');
                break;
        }
        return $q.reject(rejection);
      }
    };
  }]);
