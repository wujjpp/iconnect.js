'use strict';

/**
 * @ngdoc directive
 * @name iconnectApp.directive:a
 * @description
 * # a
 */
// Handle global LINK click
angular.module('iconnectApp').directive('a', function() {
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {
      if (attrs.ngClick || attrs.href === '' || attrs.href === '#') {
        elem.on('click', function(e) {
          e.preventDefault(); // prevent link click for above criteria
        });
      }
    }
  };
});
