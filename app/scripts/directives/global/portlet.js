'use strict';
/*
 * Author: Wu Jian Ping
 *
 * */

/**
 * @ngdoc directive
 * @name iconnectApp.directive:portlet
 * @description
 * # portlet
 */
angular.module('iconnectApp')
  .directive('portlet', function () {
    return {
      template: '<div class="portlet" ng-transclude></div>',
      restrict: 'EA',
      transclude: true,
      replace: true
    };
  })
  .directive('portletTitle', function () {
    return {
      template: '<div class="portlet-title" ng-transclude></div>',
      restrict: 'EA',
      transclude: true,
      replace: true
    };
  })
  .directive('portletCaption', function () {
    return {
      template: '<div class="caption" ng-transclude></div>',
      restrict: 'EA',
      transclude: true,
      replace: true
    };
  })

  .directive('portletTools', function () {
    return {
      template: '<div class="tools" ng-transclude></div>',
      restrict: 'EA',
      transclude: true,
      replace: true,
      link: function (scope, element) {
        //init tooltips
        var initTooltip = function () {
          // portlet tooltips
          element.find('a.fullscreen').tooltip({
            container: 'body',
            title: 'Fullscreen'
          });
          element.find('a.reload').tooltip({
            container: 'body',
            title: 'Reload'
          });
          element.find('a.remove').tooltip({
            container: 'body',
            title: 'Remove'
          });
          element.find('a.config').tooltip({
            container: 'body',
            title: 'Settings'
          });
          element.find('a.collapse, a.expand').tooltip({
            container: 'body',
            title: 'Collapse/Expand'
          });
        };
        initTooltip();

        // handle portlet remove
        element.find('a.remove').click(function (e) {
          e.preventDefault();

          if ($('body').hasClass('page-portlet-fullscreen')) {
            $('body').removeClass('page-portlet-fullscreen');
          }
          element.find('a.fullscreen').tooltip('destroy');
          element.find('a.reload').tooltip('destroy');
          element.find('a.remove').tooltip('destroy');
          element.find('a.config').tooltip('destroy');
          element.find('a.collapse, a.tools > .expand').tooltip('destroy');

          var portlet = $(this).closest(".portlet");
          portlet.remove();
        });
        // handle portlet fullscreen
        element.find('a.fullscreen').click(function (e) {
          e.preventDefault();
          var portlet = $(this).closest(".portlet");
          if (portlet.hasClass('portlet-fullscreen')) {
            $(this).removeClass('on');
            portlet.removeClass('portlet-fullscreen');
            $('body').removeClass('page-portlet-fullscreen');
            portlet.children('.portlet-body').css('height', 'auto');
          } else {
            var height = Metronic.getViewPort().height -
              portlet.children('.portlet-title').outerHeight() -
              parseInt(portlet.children('.portlet-body').css('padding-top')) -
              parseInt(portlet.children('.portlet-body').css('padding-bottom'));

            $(this).addClass('on');
            portlet.addClass('portlet-fullscreen');
            $('body').addClass('page-portlet-fullscreen');
            portlet.children('.portlet-body').css('height', height);
          }

        });
        // handle portlet expand and collapse
        element.find('.collapse, .expand').click(function (e) {
          e.preventDefault();
          var el = $(this).closest(".portlet").children(".portlet-body");
          if ($(this).hasClass("collapse")) {
            $(this).removeClass("collapse").addClass("expand");
            el.slideUp(200);
          } else {
            $(this).removeClass("expand").addClass("collapse");
            el.slideDown(200);
          }
          $(this).tooltip('hide');
        });

        element.find('a').click(function () {
          $(this).tooltip('hide');
        });

      }
    };

  })
  .directive('portletBody',function () {
    return {
      template: '<div class="portlet-body" ng-transclude></div>',
      restrict: 'EA',
      transclude: true,
      replace: true,
      scope:{}
    };
  })
  .directive('portletActions', function () {
    return {
      template: '<div class="actions" ng-transclude></div>',
      restrict: 'EA',
      transclude: true,
      replace: true
    };
  });
