'use strict';
/**
 * @ngdoc service
 * @name iconnectApp.Global/ThemeSetting
 * @description
 * # Global/ThemeSetting
 * Service in the iconnectApp.
 */

angular.module('iconnectApp')
  .service('GlobalThemeSetting', ['$cookies', function ($cookies) {

    var defaultOption = {
      themeColor: 'default',
      layoutStyleOption: 'square',
      layoutOption: 'fluid',
      pageHeaderOption: 'fixed',
      pageHeaderTopDropdownStyleOption: 'light',
      sidebarOption: 'default',
      sidebarMenuOption: 'accordion',
      sidebarStyleOption: 'default',
      sidebarPosOption: 'left',
      pageFooterOption: 'default'
    };

    this.save = function () {
      var expireTime = new Date();
      expireTime.setDate(expireTime.getDate() + 7);

      //for reducing bandwidth, rename option's property name
      var obj = {
        themeColor: this.themeColor,
        layoutStyleOption: this.layoutStyleOption,
        layoutOption: this.layoutOption,
        pageHeaderOption: this.pageHeaderOption,
        pageHeaderTopDropdownStyleOption: this.pageHeaderTopDropdownStyleOption,
        sidebarOption: this.sidebarOption,
        sidebarMenuOption: this.sidebarMenuOption,
        sidebarStyleOption: this.sidebarStyleOption,
        sidebarPosOption: this.sidebarPosOption,
        pageFooterOption: this.pageFooterOption
      };
      var wordArray = CryptoJS.enc.Utf8.parse( _.values(obj).reduce(function (a, b) {
        return a + ',' + b;
      }));
      var data = CryptoJS.enc.Base64.stringify(wordArray);
      $cookies.put('theme', data, {expires: expireTime});
    };

    this.reset = function () {
      _.extend(this, defaultOption);
    };

    this.init = function () {
      if ($cookies.get('theme')) {
        var rawData = '';
        //Perhaps the setting data was destroy by client, so we should catch 'decode' exception and assign the default value
        try{
          var parsedWordArray = CryptoJS.enc.Base64.parse($cookies.get('theme'));
          rawData = parsedWordArray.toString(CryptoJS.enc.Utf8);
        }catch(e) {
          rawData = _.values(defaultOption).reduce(function (a, b) {
            return a + ',' + b;
          });
        }
        var data = rawData.split(',');
        if (data.length === 10) {
          var obj = {
            themeColor: data[0],
            layoutStyleOption: data[1],
            layoutOption: data[2],
            pageHeaderOption: data[3],
            pageHeaderTopDropdownStyleOption: data[4],
            sidebarOption: data[5],
            sidebarMenuOption: data[6],
            sidebarStyleOption: data[7],
            sidebarPosOption: data[8],
            pageFooterOption: data[9]
          };
          _.extend(this, obj);
        }
        else{
          _.extend(this,defaultOption);
        }
      } else {
        _.extend(this, defaultOption);
      }
      this.save();
    };

    this.init();
  }]);
