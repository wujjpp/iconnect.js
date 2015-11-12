'use strict';

/**
 * @ngdoc service
 * @name iconnectApp.Global/Settings
 * @description
 * # Global/Settings
 * Factory in the iconnectApp.
 */
angular.module('iconnectApp')
  .factory('GlobalSettings', function () {
    // supported languages
    return {
      layout: {
        pageSidebarClosed: false, // sidebar menu state
        pageBodySolid: false, // solid body color state
        pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
      }
    };
  });
