'use strict';

describe('Controller: SampleTestPerformanceInputCtrl', function () {

  // load the controller's module
  beforeEach(module('iconnectApp'));

  var SampleTestPerformanceInputCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleTestPerformanceInputCtrl = $controller('SampleTestPerformanceInputCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SampleTestPerformanceInputCtrl.awesomeThings.length).toBe(3);
  });
});
