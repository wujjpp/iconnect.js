'use strict';

/**
 * @ngdoc service
 * @name iconnectApp.RegionService
 * @description
 * # RegionService
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('RegionService',['$http', function ($http) {

    this.loadAllRegions = function(){
      return $http.get('api/regions');
    };
  }]);
