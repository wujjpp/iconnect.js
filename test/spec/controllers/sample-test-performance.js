'use strict';

describe('Controller: SampleTestPerformanceCtrl', function () {

  // load the controller's module
  beforeEach(module('iconnectApp'));

  var SampleTestPerformanceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleTestPerformanceCtrl = $controller('SampleTestPerformanceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(SampleTestPerformanceCtrl.awesomeThings.length).toBe(3);
  });
});
