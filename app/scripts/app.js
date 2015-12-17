'use strict';

/**
 * @ngdoc overview
 * @name iconnectApp
 * @description
 * # iconnectApp
 *
 * Main module of the application.
 */

angular
  .module('iconnectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'ui.select2',
    'ui.select',
    'validator',
    'validator.rules'
  ]);

//setup block ui interceptor while making ajax request
angular.module('iconnectApp').config(['$httpProvider', function ($httpProvider) {
  $httpProvider.interceptors.push('responseParser');
  $httpProvider.interceptors.push('blockUI');
}]);

angular.module('iconnectApp').config(['$uibTooltipProvider', function ($uibTooltipProvider) {
  $uibTooltipProvider.options({
    placement: 'top',
    animation: true,
    popupDelay: 0,
    popupCloseDelay: 500,
    appendToBody: true
  });
}]);

/* Init global settings and run the app */
angular.module('iconnectApp').run([
  '$rootScope',
  'GlobalSettings',
  '$state',
  'GlobalThemeSetting',
  'LoginService',
  'Metronic',
  'Layout',
  'QuickSidebar',
  function ($rootScope, settings, $state, themeSettings, loginService, Metronic) {

    /*config toastr*/
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "positionClass": "toast-top-right",
      "onclick": null,
      "showDuration": "1000",
      "hideDuration": "1000",
      "timeOut": "5000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };

    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.loginService = loginService;
    $rootScope.themeSettings = themeSettings;
    $rootScope.settings = settings;
    Metronic.init();

    $rootScope.$on('$stateChangeStart', function (event, toState) {
      if(!loginService.isLogin() && toState.name !== 'login'){
        event.preventDefault();
        $state.go('login');
      }
    });

    /*
    $rootScope.$on('$stateChangeSuccess', function (event, to, toParams, from, fromParams) {
      console.log('to:');
      console.log(to);
      console.log('toParams');
      console.log(toParams);
      console.log('from');
      console.log(from);
      console.log('fromParams');
      console.log(fromParams);
    });
*/

  }]);

