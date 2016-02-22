'use strict';

/**
 * @ngdoc service
 * @name iconnectApp.TaskService
 * @description
 * # TaskService
 * Factory in the iconnectApp.
 */
angular.module('iconnectApp')
  .factory('TaskService', ['$resource', function ($resource) {
    return $resource('/api/tasks/:id', null, {
  'update': {method: 'PUT'},
  'get': {method: 'GET'},
  'save': {method: 'POST'},
  'query': {method: 'GET', isArray: true},
  'remove': {method: 'DELETE'},
  'delete': {method: 'DELETE'}
});
}]);
