'use strict';

/**
 * @ngdoc filter
 * @name iconnectApp.filter:genderDecoder
 * @function
 * @description
 * # genderDecoder
 * Filter in the iconnectApp.
 */
angular.module('iconnectApp')
  .filter('genderDecoder', function () {
    return function (input) {
      if(input === 0 || input === "0"){
        //return 'Male';
        return "<i class='icon-user font-blue'></i>";
      }
      else if(input === 1 || input === "1"){
        return '<i class="icon-user-female font-red"></i>';
        //return 'Female';
      }
      return input;
    };
  });
