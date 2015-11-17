'use strict';



angular.module('iconnectApp').config(['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', function ($stateProvider, $urlRouterProvider,$urlMatcherFactoryProvider) {

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
    .state('authorised',{
      abstract: true,
      url: '/authorised',
      templateUrl:'views/authorised.html'
    })
    .state('authorised.dashboard', {
      url: "/dashboard",
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .state('authorised.formValidation',{
      url:'/formValidation',
      templateUrl:'views/form-validation.html',
      controller:'FormValidationCtrl'
    })
    .state('authorised.checkbox',{
      url:'/checkbox',
      templateUrl:'views/sample-checkbox.html',
      controller:'CheckboxCtrl'
    })
    .state('authorised.radio',{
      url:'/radio',
      templateUrl:'views/sample-radio.html',
      controller:'RadioCtrl'
    })
    .state('authorised.datepicker',{
      url:'/datepicker',
      templateUrl:'views/sample-datepicker.html',
      controller:'DatepickerCtrl',
      controllerAs:'datepicker'
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
    });

}]);

