'use strict';

/*
 * Author: Wu Jian Ping
 * */

 /**
 * @ngdoc service
 * @name iconnectApp.jsonSerializer
 * @description
 * # jsonSerializer
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('jsonSerializer', function () {

    this.serialize = function(object){
      return JSON.stringify(object);
    };

    this.deserialize = function(str){
      return JSON.parse(str);
    };
  });
