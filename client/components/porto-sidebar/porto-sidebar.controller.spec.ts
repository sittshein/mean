'use strict';

describe('Controller: PortoSidebarCtrl', function () {

  // load the controller's module
  beforeEach(module('meanFullstackApp'));

  var PortoSidebarCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortoSidebarCtrl = $controller('PortoSidebarCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
