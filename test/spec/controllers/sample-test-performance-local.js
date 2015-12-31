'use strict';

describe('Controller: SampleTestPerformanceLocalCtrl', function () {

  // load the controller's module
  beforeEach(module('iconnectApp'));

  var SampleTestPerformanceLocalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleTestPerformanceLocalCtrl = $controller('SampleTestPerformanceLocalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SampleTestPerformanceLocalCtrl.awesomeThings.length).toBe(3);
  });
});
