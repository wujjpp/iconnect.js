'use strict';

describe('Controller: SampleTestPerformanceDropdownNormalCtrl', function () {

  // load the controller's module
  beforeEach(module('iconnectApp'));

  var SampleTestPerformanceDropdownNormalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleTestPerformanceDropdownNormalCtrl = $controller('SampleTestPerformanceDropdownNormalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SampleTestPerformanceDropdownNormalCtrl.awesomeThings.length).toBe(3);
  });
});
