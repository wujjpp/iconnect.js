'use strict';

/**
 * @ngdoc service
 * @name iconnectApp.CurrencyConverter
 * @description
 * # CurrencyConverter
 * Factory in the iconnectApp.
 */
angular.module('iconnectApp')
  .factory('CurrencyConverter', function () {

    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };
    var convert = function (amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };

    return {
      currencies: currencies,
      convert: convert
    };
  });
