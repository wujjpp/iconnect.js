'use strict';

describe('Controller: SampleOrderCtrl', function () {

  // load the controller's module
  beforeEach(module('iconnectApp'));

  var SampleOrderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SampleOrderCtrl = $controller('SampleOrderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SampleOrderCtrl.awesomeThings.length).toBe(3);
  });
});
