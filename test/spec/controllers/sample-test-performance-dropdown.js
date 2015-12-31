'use strict';

describe('Controller: SampleTestPerformanceDropdownCtrl', function () {

  // load the controller's module
  beforeEach(module('iconnectApp'));

  var SampleTestPerformanceDropdownCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleTestPerformanceDropdownCtrl = $controller('SampleTestPerformanceDropdownCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SampleTestPerformanceDropdownCtrl.awesomeThings.length).toBe(3);
  });
});
