'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:GlobalSidebarCtrl
 * @description
 * # GlobalSidebarCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('SidebarController', ['$scope', '$rootScope', '$q', '$timeout', 'Layout', function ($scope, $rootScope, $q, $timeout, Layout) {
    //Maintain active link and scroll effect
    $rootScope.$on('$stateChangeSuccess', function () {
      //While state been changed, we should activate selected link in the sidebar menu by manual
      Layout.setSidebarMenuActiveLink('match');
      // auto scorll to page top
      $timeout(function () {
        Metronic.scrollTop(); // scroll to the top on content load
      }, $rootScope.settings.layout.pageAutoScrollOnLoad);
    });

    //FIXTURE data
    var menus = [
      {
        url: '#/authorised/dashboard',
        icon: 'icon-home',
        name: 'Dashboard'
      },
      {
        icon: 'icon-settings',
        name: 'iConnect.js DEMO',
        subMenus: [
          {
            url: '#/authorised/formValidation',
            icon: 'icon-puzzle',
            name: 'Form Validation'
          },
          {
            url: '#/authorised/checkbox',
            icon: 'icon-puzzle',
            name: 'Checkbox samples'
          },
          {
            url: '#/authorised/radio',
            icon: 'icon-puzzle',
            name: 'Radio samples'
          },
          {
            url: '#/authorised/datepicker',
            icon: 'icon-puzzle',
            name: 'Datepicker samples'
          },
          {
            url: '#/authorised/customer',
            icon: 'icon-puzzle',
            name: 'Customers'
          },
          {
            url: '#/authorised/myTasks',
            icon: 'icon-puzzle',
            name: 'TODO'
          },
          {
            url: '#/authorised/product',
            icon: 'icon-puzzle',
            name: 'Products'
          },
          {
            url: '#/authorised/order',
            icon: 'icon-puzzle',
            name: 'Orders'
          },
          {
            url: '#/authorised/subrouters',
            icon: 'icon-puzzle',
            name: 'Sub Router Sample'
          }]
      },
      {
        icon: 'icon-wrench',
        name: 'jQuery Plugins',
        subMenus: [
          {
            url: '#/form-tools',
            icon: 'icon-puzzle',
            name: 'Form Tools'
          },
          {
            url: '#/pickers',
            icon: 'icon-calender',
            name: 'Date & Time Pickers'
          },
          {
            url: '#/dropdowns',
            icon: 'icon-refresh',
            name: 'Custom Dropdowns'
          },
          {
            url: '#/tree',
            icon: 'icon-share',
            name: 'Tree View'
          },
          {
            url: '#/tree2',
            name: 'Test default icon'
          }
        ]
      },
      {
        url: '#/profile/dashboard',
        icon: 'icon-user',
        name: 'User Profile'
      }
    ];

    //simulate network delay
    var loadMenu = function () {
      return $q(function (resolve) {
        $timeout(function () {
          resolve(menus);
        }, 0);
      });
    };

    loadMenu().then(function (data) {
      $scope.menus = data;

      var init = function () {
        $timeout(function () {
          if (!$scope.$$phase) {
            Layout.initSidebar();
          } else {
            init();
          }
        }, 300);
      };
      init();
    });
  }]);
