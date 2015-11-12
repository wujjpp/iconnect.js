'use strict';
/*
 * Author: Wu Jian Ping
 * */

angular.module('validator.rules', ['validator']).config([
  '$validatorProvider', function ($validatorProvider) {

    //override angular-validator default behavior

    $validatorProvider.convertError = function (error) {

      /*
       Convert rule.error.
       @param error: error messate (string) or function(value, scope, element, attrs, $injector)
       @return: function(value, scope, element, attrs, $injector)
       */
      var errorMessage;
      if (typeof error === 'function') {
        return error;
      }
      errorMessage = error.constructor === String ? error : '';
      return function (value, scope, element, attrs) {
        var $label, label, parent, _i, _len, _ref, _results;
        parent = $(element).parent();
        _results = [];
        while (parent.length !== 0) {
          if (parent.hasClass('form-group')) {
            parent.addClass('has-error').removeClass('has-success');
            _ref = parent.find('label');
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              label = _ref[_i];
              if ($(label).hasClass('error')) {
                $(label).remove();
              }
            }
            $label = $("<label class='control-label error'>" + errorMessage + "</label>");
            if (attrs.id) {
              $label.attr('for', attrs.id);
            }
            if ($(element).parent().hasClass('input-group')) {
              $(element).parent().parent().append($label);
            } else {
              $(element).parent().append($label);
            }
            break;
          }
          _results.push(parent = parent.parent());
        }
        return _results;
      };
    };

    $validatorProvider.convertSuccess = function (success) {

      /*
       Convert rule.success.
       @param success: function(value, scope, element, attrs, $injector)
       @return: function(value, scope, element, attrs, $injector)
       */
      if (typeof success === 'function') {
        return success;
      }
      return function (value, scope, element) {
        var label, parent, _i, _len, _ref, _results;
        parent = $(element).parent();
        _results = [];
        while (parent.length !== 0) {
          if (parent.hasClass('form-group')) {
            parent.removeClass('has-error');

            if (!element.hasClass('ng-pristine')) {
              parent.addClass('has-success');
            }

            _ref = parent.find('label');
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              label = _ref[_i];
              if ($(label).hasClass('error')) {
                $(label).remove();
              }
            }
            break;
          }
          _results.push(parent = parent.parent());
        }
        return _results;
      };
    };

    var optional = function (val) {
      return val === '' || val === null || val === undefined;
    };

    $validatorProvider.register('required', {
      invoke: 'watch',
      validator: /.+/,
      error: 'This field is required.'
    });

    $validatorProvider.register('number', {
      invoke: 'watch',
      validator: function (value) {
        return optional(value) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
      },
      error: 'This field should be the number.'
    });

    $validatorProvider.register('email', {
      invoke: 'watch',
      validator: function (value) {
        return optional(value) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
      },
      error: 'This field should be the email.'
    });

    $validatorProvider.register('date', {
      invoke: 'watch',
      validator: function (value) {
        return optional(value) || !/Invalid|NaN/.test(new Date(value).toString());
      },
      error: 'This field should be the date.'
    });

    $validatorProvider.register('dateISO', {
      invoke: 'watch',
      validator: function (value) {
        return optional(value) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
      },
      error: 'This field should be the dateISO.'
    });

    $validatorProvider.register('digits', {
      invoke: 'watch',
      validator: function (value) {
        return optional(value) || /^\d+$/.test(value);
      },
      error: 'This field should be the digits.'
    });

    $validatorProvider.register('creditcard', {
      invoke: 'watch',
      validator: function (value) {
        if (optional(value)) {
          return true;
        }
        else {
          if (/[^0-9 \-]+/.test(value)) {
            return false;
          }
          var nCheck = 0,
            nDigit = 0,
            bEven = false,
            n, cDigit;

          value = value.replace(/\D/g, "");

          // Basing min and max length on
          // http://developer.ean.com/general_info/Valid_Credit_Card_Types
          if (value.length < 13 || value.length > 19) {
            return false;
          }

          for (n = value.length - 1; n >= 0; n--) {
            cDigit = value.charAt(n);
            nDigit = parseInt(cDigit, 10);
            if (bEven) {
              if (( nDigit *= 2 ) > 9) {
                nDigit -= 9;
              }
            }
            nCheck += nDigit;
            bEven = !bEven;
          }

          return ( nCheck % 10 ) === 0;
        }
      },
      error: 'This field should be the dateISO.'
    });

    //TODO: Correction
    /*
     $validatorProvider.register('min', {
     invoke: 'watch',
     validator: function (value, scope, element, attrs) {
     return optional(value) || value >= attrs.min;
     },
     error: 'Value must be greater than min.'
     });

     $validatorProvider.register('max', {
     invoke: 'watch',
     validator: function (value, scope, element, attrs) {
     console.log('value:' + value + ' max:' + attrs.max);
     return optional(value) || value <= attrs.max;
     },
     error: 'Value must be less than max.'
     });

     $validatorProvider.register('minlength', {
     invoke: 'watch',
     validator: function (value, scope, element, attrs) {
     return optional(value) || value.length >= attrs.minlength;
     },
     error: "Value's length must be equal or greater than minLength."
     });

     $validatorProvider.register('maxlength', {
     invoke: 'watch',
     validator: function (value, scope, element, attrs) {
     return optional(value) || value.length <= attrs.minlength;
     },
     error: "Value's length must be equal or greater than maxLength."
     });

     $validatorProvider.register('equalTo', {
     invoke: 'watch',
     validator: function (value, scope, element, attrs) {
     return optional(value) || value === $(attrs.equalTo).val();
     },
     error: "Value's length must equal to target."
     });
     */

    $validatorProvider.register('url', {
      invoke: 'watch',
      validator: function (value) {
        return optional(value) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
      },
      error: 'This field should be the url.'
    });
  }
]);

