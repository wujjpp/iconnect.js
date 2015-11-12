'use strict';
/*
 * Author: Wu Jian Ping
 * */

/**
 * @ngdoc service
 * @name iconnectApp.paginator
 * @description
 * # paginator
 * Factory in the iconnectApp.
 */
angular.module('iconnectApp')
  .factory('paginator', function () {

    var Paginator = function () {
      this.size = 10;// how many records in single page
      this.page = 1; // current page index, start from 1
      this.count = 0; // total records returned by server
      this.max = 15; // how many pages should be display
    };

    Paginator.prototype.getPagerParams = function () {
      return {
        size: this.size,
        page: this.page
      };
    };

    return {
      create: function () {
        return new Paginator();
      }
    };
  });
