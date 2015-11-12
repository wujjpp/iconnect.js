'use strict';
/*
 * Author: Wu Jian Ping
 * */

angular.module('iconnectApp')

  .directive('datepicker2', ['$datepicker2', function ($datepicker2) {

    return {
      restrict: 'EA',
      require: 'ngModel',
      replace: true,
      template: "<div class='input-group'>" +
      "<input type='text' ng-model='model' class='form-control'>" +
      "<span class='input-group-addon' style='cursor: pointer'>" +
      "<i class='fa fa-calendar'></i>" +
      "</span>" +
      "</div>",

      scope: {
        'model': '=ngModel'
      },

      link: function (scope, element, attrs, ctrl) {

        $('body').removeClass("modal-open"); // fix bug when inline picker is used in modal
        //prepare option
        var allKeys = _.allKeys($datepicker2.defaults);
        var options = _.pick(attrs, function (value, key) {
          return _.contains(allKeys, key);
        });
        options = _.defaults(options, $datepicker2.defaults);

        //for compatibility with angular-validator
        element[0].select = function () {
          element.find('input').select();
        };

        //Enable or disable input
        if (!(attrs.allowEdit === '' || attrs.allowEdit)) {
          element.find('input').attr('readonly', true);
        }

        var self = element.find('.input-group-addon').datepicker(options);
        self.on('changeDate', function () {
          var newValue = self.datepicker('getFormattedDate');
          scope.$apply(function () {
            ctrl.$setViewValue(newValue);
          });
        });

        scope.$watch('model', function (newValue) {
          self.datepicker('update', newValue);
          element.find('input').val(newValue);
        });

        ctrl.$setPristine();
        //allow click input to open datepicker
        element.find('input').click(function () {
          self.datepicker('show');
        });
      }
    };
  }])

  .directive('datepickerWithoutAddon', ['$datepicker2', function ($datepicker2) {

     return {
      restrict: 'EA',
      require: 'ngModel',
      replace: true,
      template: "<input type='text' class='form-control'>",

      scope: {
        'model': '=ngModel'
      },
      link: function (scope, element, attrs, ctrl) {

        $('body').removeClass("modal-open"); // fix bug when inline picker is used in modal

        var allKeys = _.allKeys($datepicker2.defaults);
        var options = _.pick(attrs, function (value, key) {
          return _.contains(allKeys, key);
        });
        options = _.defaults(options, $datepicker2.defaults);
        var self = element.datepicker(options);
        self.on('changeDate', function () {
          var newValue = self.datepicker('getFormattedDate');
          scope.$apply(function () {
            ctrl.$setViewValue(newValue);
          });
        });
        scope.$watch('model', function (newValue) {
          self.datepicker('update', newValue);
        });
        ctrl.$setPristine();
      }
    };
  }])

  .provider('$datepicker2', function () {
    var provider = {
      defaults: {
        autoclose: true,
        beforeShowDay: angular.noop,
        beforeShowMonth: angular.noop,
        calendarWeeks: false,
        clearBtn: true,
        toggleActive: false,
        daysOfWeekDisabled: [],
        datesDisabled: [],
        endDate: Infinity,
        forceParse: true,
        format: 'yyyy-mm-dd',
        keyboardNavigation: true,
        language: 'en',
        minViewMode: 0,
        multidate: false,
        multidateSeparator: ',',
        orientation: "auto",
        rtl: false,
        startDate: -Infinity,
        startView: 0,
        todayBtn: false,
        todayHighlight: true,
        weekStart: 0,
        disableTouchKeyboard: false,
        enableOnReadonly: true,
        container: 'body'
      }
    };
    // Method for instantiating
    this.$get = function () {
      return provider;
    };
  });
