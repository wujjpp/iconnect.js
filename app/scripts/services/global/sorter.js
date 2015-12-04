'use strict';

/*
 * Author: Wu Jian Ping
 * */


/**
 * @ngdoc service
 * @name iconnectApp.sorter
 * @description
 * # sorter
 * Factory in the iconnectApp.
 */
angular.module('iconnectApp')
  .factory('sorter', function () {
    var Sorter = function () {
      this.state = {
        sortKey: '',
        sortOrder: ''
      };
    };

    Sorter.prototype.getSorterParams = function () {
      return {
        sortKey: this.state.sortKey,
        sortOrder: this.state.sortOrder
      };
    };

    Sorter.prototype.reset = function () {
      this.state = {sortKey: '', sortOrder: ''};
    };

    return {
      create: function () {
        return new Sorter();
      }
    };
  });
