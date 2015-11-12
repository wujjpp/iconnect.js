'use strict';

/*
 * Author: Wu Jian Ping
 *
 * */
angular.module('iconnectApp').directive('form', function () {
  return {
    restrict: 'E',
    link: function (scope, elem) {
      elem.addClass('form');
    }
  };
})
  .directive('formBody', function () {
    return {
      restrict: 'EA',
      template: '<div class="form-body" ng-transclude></div>',
      replace: true,
      transclude: true
    };
  })
  .directive('formGroup', function(){
    return {
      restrict: 'EA',
      template: '<div class="form-group" ng-transclude></div>',
      replace: true,
      transclude: true
    };
  })
  .directive('formActions', function(){
    return {
      restrict: 'EA',
      template: '<div class="form-actions" ng-transclude></div>',
      replace: true,
      transclude: true
    };
  });
