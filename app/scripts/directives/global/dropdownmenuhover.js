'use strict';

/**
 * @ngdoc directive
 * @name iconnectApp.directive:dropdownMenuHover
 * @description
 * # dropdownMenuHover
 */
// Handle Dropdown Hover Plugin Integration
angular.module('iconnectApp').directive('dropdownMenuHover', function () {
  return {
    link: function (scope, elem) {
      elem.dropdownHover();
    }
  };
});
