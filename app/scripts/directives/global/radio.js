/*jshint eqeqeq:false*/

'use strict';
/*
 * Author: Wu Jian Ping
 * */

angular.module('iconnectApp').directive('radio', ['$injector', function ($injector) {
  return {
    restrict: 'EA',
    require: 'ngModel',
    replace: true,
    template: "<div class='radio'>" +
    "<input type='radio' ng-disabled='ngDisabled' ng-model='ngModel' ng-change='ngChange'>" +
    "<label class='unselectable' ng-disabled='ngDisabled'></label>" +
    "</div>",

    scope: {
      'ngModel': '=',
      'ngChange': '&',
      'ngDisabled': '='
    },

    link: function (scope, element, attrs, ctrl) {
      var $parse = $injector.get('$parse');

      if (attrs.name !== undefined) {
        element.find('input').attr('name', attrs.name);
      }

      var value;
      if (attrs.ngValue !== undefined) {
        value = $parse(attrs.ngValue)(scope.$parent);
      }
      else {
        value = attrs.value;
      }

      if (attrs.ngText !== undefined) {
        element.find('label').html($parse(attrs.ngText)(scope.$parent));
      }

      scope.$watch('ngModel', function () {
        if (ctrl.$modelValue == value) {
          element.find('input').attr('checked', true);
        } else {
          element.find('input').removeAttr('checked');
        }
      });

      //Handle label click event, so that we can check or uncheck via this label
      element.find('label').bind("click", function () {
        if (attrs.ngDisabled) {
          if ($parse(attrs.ngDisabled)(scope.$parent)) {
            return;
          }
        }
        scope.$apply(function () {
          ctrl.$setViewValue(value);
        });
      });
    }
  };
}]);
