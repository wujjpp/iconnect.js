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
    /*
     //FIXTURE data
     var menus = [
     {
     url: '/authorised/dashboard',
     icon: 'icon-home',
     name: 'Dashboard'
     },
     {
     icon: 'icon-settings',
     name: 'iConnect.js DEMO',
     subMenus: [
     {
     url: '/authorised/formValidation',
     icon: 'icon-puzzle',
     name: 'Form Validation'
     },
     {
     url: '/authorised/checkbox',
     icon: 'icon-puzzle',
     name: 'Checkbox samples'
     },
     {
     url: '/authorised/radio',
     icon: 'icon-puzzle',
     name: 'Radio samples'
     },
     {
     url: '/authorised/datepicker',
     icon: 'icon-puzzle',
     name: 'Datepicker samples'
     },
     {
     url: '/authorised/customer',
     icon: 'icon-puzzle',
     name: 'Customers'
     },
     {
     url: '/authorised/myTasks',
     icon: 'icon-puzzle',
     name: 'TODO'
     },
     {
     url: '/authorised/product',
     icon: 'icon-puzzle',
     name: 'Products'
     },
     {
     url: '/authorised/order',
     icon: 'icon-puzzle',
     name: 'Orders'
     },
     {
     url: '/authorised/subrouters',
     icon: 'icon-puzzle',
     name: 'Sub Router Sample'
     }]
     },
     {
     icon: 'icon-wrench',
     name: 'Performance Testing',
     subMenus: [
     //local data
     {
     url: '/authorised/static-local-records-100',
     icon: 'icon-puzzle',
     name: 'local-100-static'
     },
     {
     url: '/authorised/dynamic-local-records-100',
     icon: 'icon-puzzle',
     name: 'local-100-dynamic'
     },
     {
     url: '/authorised/static-local-records-200',
     icon: 'icon-puzzle',
     name: 'local-200-static'
     },
     {
     url: '/authorised/dynamic-local-records-200',
     icon: 'icon-puzzle',
     name: 'local-200-dynamic'
     },
     {
     url: '/authorised/static-local-records-500',
     icon: 'icon-puzzle',
     name: 'local-500-static'
     },
     {
     url: '/authorised/dynamic-local-records-500',
     icon: 'icon-puzzle',
     name: 'local-500-dynamic'
     },
     {
     url: '/authorised/static-local-records-1000',
     icon: 'icon-puzzle',
     name: 'local-1000-static'
     },
     {
     url: '/authorised/dynamic-local-records-1000',
     icon: 'icon-puzzle',
     name: 'local-1000-dynamic'
     },
     {
     url: '/authorised/static-local-records-1500',
     icon: 'icon-puzzle',
     name: 'local-1500-static'
     },
     {
     url: '/authorised/dynamic-local-records-1500',
     icon: 'icon-puzzle',
     name: 'local-1500-dynamic'
     },
     {
     url: '/authorised/static-local-records-2000',
     icon: 'icon-puzzle',
     name: 'local-2000-static'
     },
     {
     url: '/authorised/static-local-records-3000',
     icon: 'icon-puzzle',
     name: 'local-3000-static'
     },
     {
     url: '/authorised/static-local-records-4000',
     icon: 'icon-puzzle',
     name: 'local-4000-static'
     },
     {
     url: '/authorised/static-local-records-5000',
     icon: 'icon-puzzle',
     name: 'local-5000-static'
     },


     //remote data
     {
     url: '/authorised/static-remote-records-100',
     icon: 'icon-puzzle',
     name: 'remote-100-static'
     },
     {
     url: '/authorised/dynamic-remote-records-100',
     icon: 'icon-puzzle',
     name: 'remote-100-dynamic'
     },
     {
     url: '/authorised/static-remote-records-200',
     icon: 'icon-puzzle',
     name: 'remote-200-static'
     },
     {
     url: '/authorised/dynamic-remote-records-200',
     icon: 'icon-puzzle',
     name: 'remote-200-dynamic'
     },
     {
     url: '/authorised/static-remote-records-500',
     icon: 'icon-puzzle',
     name: 'remote-500-static'
     },
     {
     url: '/authorised/dynamic-remote-records-500',
     icon: 'icon-puzzle',
     name: 'remote-500-dynamic'
     },
     {
     url: '/authorised/static-remote-records-1000',
     icon: 'icon-puzzle',
     name: 'remote-1000-static'
     },
     {
     url: '/authorised/dynamic-remote-records-1000',
     icon: 'icon-puzzle',
     name: 'remote-1000-dynamic'
     },
     {
     url: '/authorised/static-remote-records-1500',
     icon: 'icon-puzzle',
     name: 'remote-1500-static'
     },
     {
     url: '/authorised/dynamic-remote-records-1500',
     icon: 'icon-puzzle',
     name: 'remote-1500-dynamic'
     },
     {
     url: '/authorised/static-remote-records-2000',
     icon: 'icon-puzzle',
     name: 'remote-2000-static'
     },
     {
     url: '/authorised/static-remote-records-3000',
     icon: 'icon-puzzle',
     name: 'remote-3000-static'
     },
     {
     url: '/authorised/static-remote-records-4000',
     icon: 'icon-puzzle',
     name: 'remote-4000-static'
     },
     {
     url: '/authorised/static-remote-records-5000',
     icon: 'icon-puzzle',
     name: 'remote-5000-static'
     },
     {
     url: '/authorised/static-remote-records-10000',
     icon: 'icon-puzzle',
     name: 'remote-10000-static'
     },

     //browser DOM rendering capacity
     {
     url: '/authorised/browser-capacity-1500',
     icon: 'icon-puzzle',
     name: 'browser-capacity-1500'
     },
     {
     url: '/authorised/browser-capacity-2000',
     icon: 'icon-puzzle',
     name: 'browser-capacity-2000'
     },
     {
     url: '/authorised/browser-capacity-3000',
     icon: 'icon-puzzle',
     name: 'browser-capacity-3000'
     },
     {
     url: '/authorised/browser-capacity-4000',
     icon: 'icon-puzzle',
     name: 'browser-capacity-4000'
     },
     {
     url: '/authorised/browser-capacity-5000',
     icon: 'icon-puzzle',
     name: 'browser-capacity-5000'
     },
     {
     url: '/authorised/browser-capacity-10000',
     icon: 'icon-puzzle',
     name: 'browser-capacity-10000'
     },
     {
     url: '/authorised/data-from-local/500',
     icon: 'icon-puzzle',
     name: 'data-from-local-?'
     },
     {
     url: '/authorised/data-from-remote/500',
     icon: 'icon-puzzle',
     name: 'data-from-remote-?'
     },
     {
     url: '/authorised/test-dropdown-performance',
     icon: 'icon-puzzle',
     name: '10 dropdowns'
     },
     {
     url: '/authorised/test-dropdown-performance-normal',
     icon: 'icon-puzzle',
     name: '10 normal dropdowns'
     }
     ]
     },
     {
     url: '/profile/dashboard',
     icon: 'icon-user',
     name: 'User Profile'
     }
     ];
     */

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
        name: 'Performance Testing',
        subMenus: [
          //local data
          {
            url: '#/authorised/static-local-records-100',
            icon: 'icon-puzzle',
            name: 'local-100-static'
          },
          {
            url: '#/authorised/dynamic-local-records-100',
            icon: 'icon-puzzle',
            name: 'local-100-dynamic'
          },
          {
            url: '#/authorised/static-local-records-200',
            icon: 'icon-puzzle',
            name: 'local-200-static'
          },
          {
            url: '#/authorised/dynamic-local-records-200',
            icon: 'icon-puzzle',
            name: 'local-200-dynamic'
          },
          {
            url: '#/authorised/static-local-records-500',
            icon: 'icon-puzzle',
            name: 'local-500-static'
          },
          {
            url: '#/authorised/dynamic-local-records-500',
            icon: 'icon-puzzle',
            name: 'local-500-dynamic'
          },
          {
            url: '#/authorised/static-local-records-1000',
            icon: 'icon-puzzle',
            name: 'local-1000-static'
          },
          {
            url: '#/authorised/dynamic-local-records-1000',
            icon: 'icon-puzzle',
            name: 'local-1000-dynamic'
          },
          {
            url: '#/authorised/static-local-records-1500',
            icon: 'icon-puzzle',
            name: 'local-1500-static'
          },
          {
            url: '#/authorised/dynamic-local-records-1500',
            icon: 'icon-puzzle',
            name: 'local-1500-dynamic'
          },
          {
            url: '#/authorised/static-local-records-2000',
            icon: 'icon-puzzle',
            name: 'local-2000-static'
          },
          {
            url: '#/authorised/static-local-records-3000',
            icon: 'icon-puzzle',
            name: 'local-3000-static'
          },
          {
            url: '#/authorised/static-local-records-4000',
            icon: 'icon-puzzle',
            name: 'local-4000-static'
          },
          {
            url: '#/authorised/static-local-records-5000',
            icon: 'icon-puzzle',
            name: 'local-5000-static'
          },


          //remote data
          {
            url: '#/authorised/static-remote-records-100',
            icon: 'icon-puzzle',
            name: 'remote-100-static'
          },
          {
            url: '#/authorised/dynamic-remote-records-100',
            icon: 'icon-puzzle',
            name: 'remote-100-dynamic'
          },
          {
            url: '#/authorised/static-remote-records-200',
            icon: 'icon-puzzle',
            name: 'remote-200-static'
          },
          {
            url: '#/authorised/dynamic-remote-records-200',
            icon: 'icon-puzzle',
            name: 'remote-200-dynamic'
          },
          {
            url: '#/authorised/static-remote-records-500',
            icon: 'icon-puzzle',
            name: 'remote-500-static'
          },
          {
            url: '#/authorised/dynamic-remote-records-500',
            icon: 'icon-puzzle',
            name: 'remote-500-dynamic'
          },
          {
            url: '#/authorised/static-remote-records-1000',
            icon: 'icon-puzzle',
            name: 'remote-1000-static'
          },
          {
            url: '#/authorised/dynamic-remote-records-1000',
            icon: 'icon-puzzle',
            name: 'remote-1000-dynamic'
          },
          {
            url: '#/authorised/static-remote-records-1500',
            icon: 'icon-puzzle',
            name: 'remote-1500-static'
          },
          {
            url: '#/authorised/dynamic-remote-records-1500',
            icon: 'icon-puzzle',
            name: 'remote-1500-dynamic'
          },
          {
            url: '#/authorised/static-remote-records-2000',
            icon: 'icon-puzzle',
            name: 'remote-2000-static'
          },
          {
            url: '#/authorised/static-remote-records-3000',
            icon: 'icon-puzzle',
            name: 'remote-3000-static'
          },
          {
            url: '#/authorised/static-remote-records-4000',
            icon: 'icon-puzzle',
            name: 'remote-4000-static'
          },
          {
            url: '#/authorised/static-remote-records-5000',
            icon: 'icon-puzzle',
            name: 'remote-5000-static'
          },
          {
            url: '#/authorised/static-remote-records-10000',
            icon: 'icon-puzzle',
            name: 'remote-10000-static'
          },

          //browser DOM rendering capacity
          {
            url: '#/authorised/browser-capacity-1500',
            icon: 'icon-puzzle',
            name: 'browser-capacity-1500'
          },
          {
            url: '#/authorised/browser-capacity-2000',
            icon: 'icon-puzzle',
            name: 'browser-capacity-2000'
          },
          {
            url: '#/authorised/browser-capacity-3000',
            icon: 'icon-puzzle',
            name: 'browser-capacity-3000'
          },
          {
            url: '#/authorised/browser-capacity-4000',
            icon: 'icon-puzzle',
            name: 'browser-capacity-4000'
          },
          {
            url: '#/authorised/browser-capacity-5000',
            icon: 'icon-puzzle',
            name: 'browser-capacity-5000'
          },
          {
            url: '#/authorised/browser-capacity-10000',
            icon: 'icon-puzzle',
            name: 'browser-capacity-10000'
          },
          {
            url: '#/authorised/data-from-local/500',
            icon: 'icon-puzzle',
            name: 'data-from-local-?'
          },
          {
            url: '#/authorised/data-from-remote/500',
            icon: 'icon-puzzle',
            name: 'data-from-remote-?'
          },
          {
            url: '#/authorised/test-dropdown-performance',
            icon: 'icon-puzzle',
            name: '10 dropdowns'
          },
          {
            url: '#/authorised/test-dropdown-performance-normal',
            icon: 'icon-puzzle',
            name: '10 normal dropdowns'
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
