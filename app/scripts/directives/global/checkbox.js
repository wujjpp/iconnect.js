'use strict';
/*
 * Author: Wu Jian Ping
 * */

angular.module('iconnectApp').directive('checkbox', ['$injector', function ($injector) {
  return {
    restrict: 'EA',
    require: 'ngModel',
    replace: true,
    template: " <div class='checkbox'>" +
    "<input type='checkbox' ng-model='ngModel' ng-disabled='ngDisabled' ng-change='ngChange'>" +
    "<label class='unselectable' ng-disabled='ngDisabled'></label>" +
    "</div>",

    scope: {
      'ngModel': '=',
      'ngChange': '&',
      'ngDisabled': '='
    },

    link: function (scope, element, attrs, ctrl) {

      var $parse = $injector.get('$parse');
      var trueValue = true;
      var falseValue = false;

      // If defined set true value
      if (attrs.ngTrueValue !== undefined) {
        //because of isolate scope, so we should execute expression on scope.$parent
        trueValue = $parse(attrs.ngTrueValue)(scope.$parent);
      }

      // If defined set false value
      if (attrs.ngFalseValue !== undefined) {
        //because of isolate scope, so we should execute expression on scope.$parent
        falseValue = $parse(attrs.ngFalseValue)(scope.$parent);
      }

      // Check if name attribute is set and if so add it to the input[type=checkbox] element
      if (attrs.name !== undefined) {
        element.find('input').attr('name', attrs.name);
      }
      //set label's text
      if (attrs.ngText !== undefined) {
        element.find('label').html($parse(attrs.ngText)(scope.$parent));
      }

      scope.$watch(function () {
        if (ctrl.$modelValue === trueValue || ctrl.$modelValue === true) {
          ctrl.$setViewValue(trueValue);
        } else {
          ctrl.$setViewValue(falseValue);
        }
        return ctrl.$modelValue;
      }, function () {
        if (ctrl.$modelValue === trueValue || ctrl.$modelValue === true) {
          //set checkbox checked
          element.find('input').attr('checked', true);
        } else {
          //set checkbox unchecked
          element.find('input').removeAttr('checked');
        }
      }, true);

      //Handle label click event, so that we can check or uncheck via this label
      element.find('label').bind("click", function () {
        if (attrs.ngDisabled) {
          if ($parse(attrs.ngDisabled)(scope.$parent)) {
            return;
          }
        }
        scope.$apply(function () {
          if (ctrl.$modelValue === falseValue) {
            ctrl.$setViewValue(trueValue);
          } else {
            ctrl.$setViewValue(falseValue);
          }
        });
      });
    }
  };
}]);
