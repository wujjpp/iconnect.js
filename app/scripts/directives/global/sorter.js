'use strict';

/*
 * Author: Wu Jian Ping
 * */

/**
 * @ngdoc directive
 * @name iconnectApp.directive:sorter
 * @description
 * # sorter
 */
angular.module('iconnectApp')
  .directive('sorter', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      scope: {
        'ngModel': '='
      },
      link: function postLink(scope, element, attrs, ctrl) {
        var sortKey = attrs.sortKey;
        var setupClass = function () {
          element.removeClass('sorting sorting_asc sorting_desc');
          if (ctrl.$modelValue.sortKey === sortKey) {
            switch (ctrl.$modelValue.sortOrder) {
              case 'asc':
                element.addClass('sorting_asc');
                break;
              case 'desc':
                element.addClass('sorting_desc');
                break;
              default:
                element.addClass('sorting');
                break;
            }
          }
          else {
            element.addClass("sorting");
          }
        };
        setupClass();

        scope.$watch('ngModel', function () {
          setupClass();
        });

        //attach events
        element.click(function () {
          scope.$apply(function () {
            var model = {sortKey: sortKey};
            if (sortKey !== ctrl.$modelValue.sortKey) {
              model.sortOrder = 'asc';
            } else {
              switch (ctrl.$modelValue.sortOrder) {
                case 'asc':
                  model.sortOrder = 'desc';
                  break;
                case 'desc':
                  model.sortOrder = '';
                  break;
                default :
                  model.sortOrder = 'asc';
                  break;
              }
            }
            ctrl.$setViewValue(model);
          });
        });
      }
    };
  });
