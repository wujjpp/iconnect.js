'use strict';

describe('Service: OrderService', function () {

  // load the service's module
  beforeEach(module('iconnectApp'));

  // instantiate service
  var OrderService;
  beforeEach(inject(function (_OrderService_) {
    OrderService = _OrderService_;
  }));

  it('should do something', function () {
    expect(!!OrderService).toBe(true);
  });

});
