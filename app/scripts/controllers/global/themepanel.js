'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:GlobalThemepanelCtrl
 * @description
 * # GlobalThemepanelCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('ThemePanelController', ['$scope', '$window', 'GlobalThemeSetting','Layout', function ($scope, $window, themeSettings, Layout) {

    var resetLayout = function () {
      $("body").
        removeClass("page-boxed").
        removeClass("page-footer-fixed").
        removeClass("page-sidebar-fixed").
        removeClass("page-header-fixed").
        removeClass("page-sidebar-reversed");

      $('.page-header > .page-header-inner').removeClass("container");

      if ($('.page-container').parent(".container").size() === 1) {
        //$('.page-container').insertAfter('body > .clearfix');
        $('.page-container').insertAfter('.root-view-container > .clearfix');
      }

      if ($('.page-footer > .container').size() === 1) {
        $('.page-footer').html($('.page-footer > .container').html());
      } else if ($('.page-footer').parent(".container").size() === 1) {
        $('.page-footer').insertAfter('.page-container');
        $('.scroll-to-top').insertAfter('.page-footer');
      }

      $(".top-menu > .navbar-nav > li.dropdown").removeClass("dropdown-dark");

      //$('body > .container').remove();
      $('.root-view-container > .container').remove();
    };

    var lastSelectedLayout = '';
    var setLayout = function () {
      if (themeSettings.sidebarOption === "fixed" && themeSettings.pageHeaderOption === "default") {
        //$window.alert('Default Header with Fixed Sidebar option is not supported. Proceed with Fixed Header with Fixed Sidebar.');
        themeSettings.sidebarOption = "fixed";
        themeSettings.pageHeaderOption = "fixed";
      }

      resetLayout();

      if (themeSettings.layoutOption === "boxed") {
        $("body").addClass("page-boxed");

        // set header
        $('.page-header > .page-header-inner').addClass("container");

        //$('body > .clearfix').after('<div class="container"></div>');
        $('.root-view-container > .clearfix').after('<div class="container"></div>');

        // set content
        $('.page-container').appendTo('.root-view-container > .container');

        // set footer
        if (themeSettings.pageFooterOption === 'fixed') {
          $('.page-footer').html('<div class="container">' + $('.page-footer').html() + '</div>');
        } else {
          //$('.page-footer').appendTo('body > .container');
          $('.page-footer').appendTo('.root-view-container > .container');
        }
      }

      if (lastSelectedLayout !== themeSettings.layoutOption) {
        Metronic.runResizeHandlers();
      }
      lastSelectedLayout = themeSettings.layoutOption;

      //header
      if (themeSettings.pageHeaderOption === 'fixed') {
        $("body").addClass("page-header-fixed");
        $(".page-header").removeClass("navbar-static-top").addClass("navbar-fixed-top");
      } else {
        $("body").removeClass("page-header-fixed");
        $(".page-header").removeClass("navbar-fixed-top").addClass("navbar-static-top");
      }

      //sidebar
      if ($('body').hasClass('page-full-width') === false) {
        if (themeSettings.sidebarOption === 'fixed') {
          $("body").addClass("page-sidebar-fixed");
          $("page-sidebar-menu").addClass("page-sidebar-menu-fixed");
          $("page-sidebar-menu").removeClass("page-sidebar-menu-default");
          Layout.initFixedSidebarHoverEffect();
        } else {
          $("body").removeClass("page-sidebar-fixed");
          $("page-sidebar-menu").addClass("page-sidebar-menu-default");
          $("page-sidebar-menu").removeClass("page-sidebar-menu-fixed");
          $('.page-sidebar-menu').unbind('mouseenter').unbind('mouseleave');
        }
      }

      // top dropdown style
      if (themeSettings.pageHeaderTopDropdownStyleOption === 'dark') {
        $(".top-menu > .navbar-nav > li.dropdown").addClass("dropdown-dark");
      } else {
        $(".top-menu > .navbar-nav > li.dropdown").removeClass("dropdown-dark");
      }

      //footer
      if (themeSettings.pageFooterOption === 'fixed') {
        $("body").addClass("page-footer-fixed");
      } else {
        $("body").removeClass("page-footer-fixed");
      }

      //sidebar style
      if (themeSettings.sidebarStyleOption === 'light') {
        $(".page-sidebar-menu").addClass("page-sidebar-menu-light");
      } else {
        $(".page-sidebar-menu").removeClass("page-sidebar-menu-light");
      }

      //sidebar menu
      if (themeSettings.sidebarMenuOption === 'hover') {
        if (themeSettings.sidebarOption === 'fixed') {
          //$window.alert("Hover Sidebar Menu is not compatible with Fixed Sidebar Mode. Select Default Sidebar Mode Instead.");
          themeSettings.sidebarMenuOption = 'accordion';
        } else {
          $(".page-sidebar-menu").addClass("page-sidebar-menu-hover-submenu");
        }
      } else {
        $(".page-sidebar-menu").removeClass("page-sidebar-menu-hover-submenu");
      }

      //sidebar position

      if (themeSettings.sidebarPosOption === 'right') {
        $("body").addClass("page-sidebar-reversed");
        $('#frontend-link').tooltip('destroy').tooltip({
          placement: 'left'
        });
      } else {
        $("body").removeClass("page-sidebar-reversed");
        $('#frontend-link').tooltip('destroy').tooltip({
          placement: 'right'
        });
      }

      Layout.fixContentHeight(); // fix content height
      Layout.initFixedSidebar(); // reinitialize fixed sidebar
    };

    var setColor = function (color) {
      $('#style_color').attr("href", 'styles/global/themes/' + color + ".css");
    };

    var setThemeStyle = function (style) {
      var file = (style === 'rounded' ? 'components-rounded' : 'components');
      $('#style_components').attr("href", 'styles/global/themes/' + file + ".css");
    };

    $scope.colors = [
      {css: 'default', title: 'Default'},
      {css: 'darkblue', title: 'Dark Blue'},
      {css: 'blue', title: 'Blue'},
      {css: 'grey', title: 'Grey'},
      {css: 'light', title: 'Light'},
      {css: 'light2', title: 'Light2'}
    ];

    //$scope.settings = themeSetting;

    $scope.$on('$includeContentLoaded', function () {
      var savedOption = themeSettings;
      resetLayout();
      setThemeStyle(themeSettings.layoutStyleOption);
      setColor(savedOption.themeColor);
      setLayout();
    });

    $scope.showPanel = function () {
      $('.toggler').hide();
      $('.toggler-close').show();
      $('.theme-panel > .theme-options').show();
    };

    $scope.closePanel = function () {
      $('.toggler').show();
      $('.toggler-close').hide();
      $('.theme-panel > .theme-options').hide();
    };

    $scope.reset = function () {
      themeSettings.reset();
      setColor(themeSettings.themeColor);
      setThemeStyle(themeSettings.layoutStyleOption);
      setLayout();
      themeSettings.save();
    };

    $scope.changeThemeStyle = function () {
      setThemeStyle(themeSettings.layoutStyleOption);
      themeSettings.save();
    };

    $scope.changeLayout = function () {
      setLayout();
      themeSettings.save();
    };

    $scope.changeColor = function (model) {
      themeSettings.themeColor = model.css;
      setColor(model.css);
      themeSettings.save();
    };
  }]);
