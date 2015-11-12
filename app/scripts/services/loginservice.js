'use strict';

/**
 * @ngdoc service
 * @name iconnectApp.Login
 * @description
 * # Login
 * Service in the iconnectApp.
 */
angular.module('iconnectApp')
  .service('LoginService', ['$cookies', function ($cookies) {
    this.login = function () {
      $cookies.put('auth-token', 1);
      this.status = true;
    };
    this.logout = function () {
      $cookies.remove('auth-token');
      this.status = false;
    };


    var verifyToken = function(token){
      return token !== undefined && token !== null && token !=='';
    };

    this.isLogin = function(){
      var token =  $cookies.get('auth-token');
      return verifyToken(token);
    };
  }]);
