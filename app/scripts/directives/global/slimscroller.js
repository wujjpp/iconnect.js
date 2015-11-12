'use strict';

/*
 * Author: Wu Jian Ping
 * */


/*
 * {
 width: '300px',
 height: '500px',
 size: '10px',
 position: 'left',
 color: '#ffcc00',
 alwaysVisible: true,
 distance: '20px',
 start: $('#child_image_element'),
 railVisible: true,
 railColor: '#222',
 railOpacity: 0.3,
 wheelStep: 10,
 allowPageScroll: false,
 disableFadeOut: false
 }
 * */

/**
 * @ngdoc directive
 * @name iconnectApp.directive:slimscroller
 * @description
 * # slimscroller
 */
angular.module('iconnectApp')
  .directive('slimScroller', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var height;
        if (element.attr("data-height")) {
          height = element.attr("data-height");
        } else {
          height = $(this).css('height');
        }

        var option = {
          allowPageScroll: true, // allow page scroll when the element scroll is ended
          size: '7px',
          color: (attrs.handleColor ? attrs.handleColor : '#bbb'),
          wrapperClass: (attrs.wrapperClass ? attrs.wrapperClass : 'slimScrollDiv'),
          railColor: (attrs.railColor ? attrs.railColor : '#eaeaea'),
          position: 'right',
          height: height,
          alwaysVisible: (attrs.alwaysVisible === "1" ? true : false),
          railVisible: (attrs.railVisible === "1" ? true : false),
          disableFadeOut: true
        };

        var off = [];

        var refresh = function () {
          var el = angular.element(element);
          el.slimScroll({destroy: true});
          el.slimScroll(option);
        };

        var registerWatch = function () {
          if (angular.isDefined(attrs.slimScroller) && !option.noWatch) {
            off.push(scope.$watchCollection(attrs.slimScroller, refresh));
          }

          if (attrs.slimsScrollWatch) {
            off.push(scope.$watchCollection(attrs.slimsScrollWatch, refresh));
          }

          if (attrs.slimScrollListento) {
            off.push(scope.$on(attrs.slimScrollListento, refresh));
          }
        };

        var destructor = function () {
          angular.element(element).slimScroll({destroy: true});
          off.forEach(function (unbind) {
            unbind();
          });
          off = null;
        };

        off.push(scope.$on('$destroy', destructor));

        registerWatch();
      }
    };
  });
