'use strict';

/**
 * @ngdoc function
 * @name iconnectApp.controller:DatepickerCtrl
 * @description
 * # DatepickerCtrl
 * Controller of the iconnectApp
 */
angular.module('iconnectApp')
  .controller('DatepickerCtrl',['$state', function ($state) {

    $state.current.data = {
      pageTitle: 'Datepicker samples',
      title: 'Datepicker samples',
      description: 'Datepicker sample page'
    };
  }]);
