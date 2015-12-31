'use strict';

describe('Controller: SampleTestPerformanceRemoteCtrl', function () {

  // load the controller's module
  beforeEach(module('iconnectApp'));

  var SampleTestPerformanceRemoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleTestPerformanceRemoteCtrl = $controller('SampleTestPerformanceRemoteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SampleTestPerformanceRemoteCtrl.awesomeThings.length).toBe(3);
  });
});
