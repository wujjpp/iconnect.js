'use strict';


angular.module('iconnectApp').config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlMatcherFactoryProvider.strictMode(false);

  /*
   $urlMatcherFactoryProvider.type('pagination', {
   encode: function(item) {
   console.log(item);
   return $.param(item);
   },
   decode: function(item) {
   // Look up the list item by index
   console.log(item);
   return ""; //list[parseInt(item, 10)];
   },
   is: function() {
   // Ensure the item is valid by checking to see that it appears
   // in the list
   // return list.indexOf(item) > -1;
   return true;
   }
   });
   */

  // For any unmatched url, send to /
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('login', {
      url: "/",
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .state('authorised', {
      abstract: true,
      url: '/authorised',
      templateUrl: 'views/authorised.html'
    })
    .state('authorised.dashboard', {
      url: "/dashboard",
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .state('authorised.formValidation', {
      url: '/formValidation',
      templateUrl: 'views/form-validation.html',
      controller: 'FormValidationCtrl'
    })
    .state('authorised.checkbox', {
      url: '/checkbox',
      templateUrl: 'views/sample-checkbox.html',
      controller: 'CheckboxCtrl'
    })
    .state('authorised.radio', {
      url: '/radio',
      templateUrl: 'views/sample-radio.html',
      controller: 'RadioCtrl'
    })
    .state('authorised.datepicker', {
      url: '/datepicker',
      templateUrl: 'views/sample-datepicker.html',
      controller: 'DatepickerCtrl',
      controllerAs: 'datepicker'
    })

    .state('authorised.customer', {
      url: "/customer",
      templateUrl: 'views/sample-customer.html',
      controller: 'CustomerCtrl'
    })

    //for create customer in 'new page' mode
    .state('authorised.createcustomer', {
      url: "/customer/create",
      templateUrl: 'views/sample-customereditor2.html',
      controller: 'CustomerEditor2Ctrl'
    })
    //for edit customer in 'new page' mode
    .state('authorised.editcustomer', {
      url: "/customer/edit/:id",
      templateUrl: 'views/sample-customereditor2.html',
      controller: 'CustomerEditor2Ctrl'
    })
    .state('authorised.myTasks', {
      url: "/myTasks",
      templateUrl: 'views/todo.html',
      controller: 'ToDoCtrl'
    })

    .state('authorised.product', {
      url: "/product",
      templateUrl: 'views/sample-product.html',
      controller: 'ProductCtrl'
    })

    .state('authorised.order', {
      url: "/order",
      templateUrl: 'views/sample-order.html',
      controller: 'OrderCtrl'
    }).state('authorised.createorder', {
      url: "/order/create",
      templateUrl: 'views/sample-order-editor.html',
      controller: 'OrderEditorCtrl'
    }).state('authorised.editorder', {
      url: "/order/edit/:orderId",
      templateUrl: 'views/sample-order-editor.html',
      controller: 'OrderEditorCtrl'
    })

    .state('authorised.subrouters', {
      url: '/subrouters',
      templateUrl: 'views/sub-routers/index.html',
      controller: 'SubRouterMainCtrl'
    }).state('authorised.subrouters.page1', {
      url: '/page1',
      //templateUrl: 'views/sample-product.html',
      //controller: 'ProductCtrl'
      templateUrl: 'views/sample-customer.html',
      controller: 'CustomerCtrl'
      //templateUrl: 'views/sub-routers/page-1.html',
      //controller: 'SubRouterPage1Ctrl'
    }).state('authorised.subrouters.page2', {
      url: '/page2',
      templateUrl: 'views/todo.html',
      controller: 'ToDoCtrl'
      //templateUrl: 'views/sub-routers/page-2.html',
      //controller: 'SubRouterPage2Ctrl'
    }).state('authorised.subrouters.page3', {
      url: '/page3',
      templateUrl: 'views/sub-routers/page-3.html',
      controller: 'SubRouterPage3Ctrl'
    }).state('authorised.subrouters.create', {
      url: '/create',
      templateUrl: 'views/sub-routers/page-3-create.html',
      controller: 'SubRouterPage3CreateCtrl'
    }).state('authorised.subrouters.page3.create', {
      url: '/create',
      templateUrl: 'views/sub-routers/page-3-create.html',
      controller: 'SubRouterPage3CreateCtrl'
    })

    //performance testing
    .state('authorised.static-local-records-100', {
      url: '/static-local-records-100',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 100
    })
    .state('authorised.dynamic-local-records-100', {
      url: '/dynamic-local-records-100',
      templateUrl: 'views/sample-test-performance-dynamic.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 100
    })
    .state('authorised.static-local-records-200', {
      url: '/static-local-records-200',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 200
    })
    .state('authorised.dynamic-local-records-200', {
      url: '/dynamic-local-records-200',
      templateUrl: 'views/sample-test-performance-dynamic.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 200
    })
    .state('authorised.static-local-records-500', {
      url: '/static-local-records-500',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 500
    })
    .state('authorised.dynamic-local-records-500', {
      url: '/dynamic-local-records-500',
      templateUrl: 'views/sample-test-performance-dynamic.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 500
    })
    .state('authorised.static-local-records-1000', {
      url: '/static-local-records-1000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 1000
    })
    .state('authorised.dynamic-local-records-1000', {
      url: '/dynamic-local-records-1000',
      templateUrl: 'views/sample-test-performance-dynamic.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 1000
    })
    .state('authorised.static-local-records-1500', {
      url: '/static-local-records-1500',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 1500
    })
    .state('authorised.dynamic-local-records-1500', {
      url: '/dynamic-local-records-1500',
      templateUrl: 'views/sample-test-performance-dynamic.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 1500
    })
    .state('authorised.static-local-records-2000', {
      url: '/static-local-records-2000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 2000
    })
    .state('authorised.static-local-records-3000', {
      url: '/static-local-records-3000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 3000
    })
    .state('authorised.static-local-records-4000', {
      url: '/static-local-records-4000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 4000
    })
    .state('authorised.static-local-records-5000', {
      url: '/static-local-records-5000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceLocalCtrl',
      count: 5000
    })

    .state('authorised.static-remote-records-100', {
      url: '/static-remote-records-100',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 100
    })
    .state('authorised.dynamic-remote-records-100', {
      url: '/dynamic-remote-records-100',
      templateUrl: 'views/sample-test-performance-dynamic.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 100
    })
    .state('authorised.static-remote-records-200', {
      url: '/static-remote-records-200',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 200
    })
    .state('authorised.dynamic-remote-records-200', {
      url: '/dynamic-remote-records-200',
      templateUrl: 'views/sample-test-performance-dynamic.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 200
    })
    .state('authorised.static-remote-records-500', {
      url: '/static-remote-records-500',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 500
    })
    .state('authorised.dynamic-remote-records-500', {
      url: '/dynamic-remote-records-500',
      templateUrl: 'views/sample-test-performance-dynamic.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 500
    })
    .state('authorised.static-remote-records-1000', {
      url: '/static-remote-records-1000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 1000
    })
    .state('authorised.dynamic-remote-records-1000', {
      url: '/dynamic-remote-records-1000',
      templateUrl: 'views/sample-test-performance-dynamic.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 1000
    })
    .state('authorised.static-remote-records-1500', {
      url: '/static-remote-records-1500',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 1500
    })
    .state('authorised.dynamic-remote-records-1500', {
      url: '/dynamic-remote-records-1500',
      templateUrl: 'views/sample-test-performance-dynamic.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 1500
    })
    .state('authorised.static-remote-records-2000', {
      url: '/static-remote-records-2000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 2000
    })
    .state('authorised.static-remote-records-3000', {
      url: '/static-remote-records-3000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 3000
    })
    .state('authorised.static-remote-records-4000', {
      url: '/static-remote-records-4000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 4000
    })
    .state('authorised.static-remote-records-5000', {
      url: '/static-remote-records-5000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 5000
    })
    .state('authorised.static-remote-records-10000', {
      url: '/static-remote-records-10000',
      templateUrl: 'views/sample-test-performance-static.html',
      controller: 'SampleTestPerformanceRemoteCtrl',
      count: 10000
    })

    .state('authorised.browser-capacity-dom-1500', {
      url: '/browser-capacity-1500',
      templateUrl: 'views/sample-test-performance-input.html',
      controller: 'SampleTestPerformanceInputCtrl',
      count: 1500
    })
    .state('authorised.browser-capacity-dom-2000', {
      url: '/browser-capacity-2000',
      templateUrl: 'views/sample-test-performance-input.html',
      controller: 'SampleTestPerformanceInputCtrl',
      count: 2000
    })
    .state('authorised.browser-capacity-dom-3000', {
      url: '/browser-capacity-3000',
      templateUrl: 'views/sample-test-performance-input.html',
      controller: 'SampleTestPerformanceInputCtrl',
      count: 3000
    })
    .state('authorised.browser-capacity-dom-4000', {
      url: '/browser-capacity-4000',
      templateUrl: 'views/sample-test-performance-input.html',
      controller: 'SampleTestPerformanceInputCtrl',
      count: 3000
    })
    .state('authorised.browser-capacity-dom-5000', {
      url: '/browser-capacity-5000',
      templateUrl: 'views/sample-test-performance-input.html',
      controller: 'SampleTestPerformanceInputCtrl',
      count: 3000
    })
    .state('authorised.browser-capacity-dom-10000', {
      url: '/browser-capacity-10000',
      templateUrl: 'views/sample-test-performance-input.html',
      controller: 'SampleTestPerformanceInputCtrl',
      count: 10000
    })
    .state('authorised.data-from-local', {
      url: '/data-from-local/:count',
      templateUrl: 'views/sample-test-performance.html',
      controller: 'SampleTestPerformanceCtrl',
      dataFrom: 'local'
    })
    .state('authorised.data-from-remote', {
      url: '/data-from-remote/:count',
      templateUrl: 'views/sample-test-performance.html',
      controller: 'SampleTestPerformanceCtrl',
      dataFrom: 'remote'
    })
    .state('authorised.test-dropdown-performance', {
      url: '/test-dropdown-performance',
      templateUrl: 'views/sample-test-performance-dropdown.html',
      controller: 'SampleTestPerformanceDropdownCtrl'
    })
    .state('authorised.test-dropdown-performance-normal', {
      url: '/test-dropdown-performance-normal',
      templateUrl: 'views/sample-test-performance-dropdown-normal.html',
      controller: 'SampleTestPerformanceDropdownCtrl'
    });
}]);

