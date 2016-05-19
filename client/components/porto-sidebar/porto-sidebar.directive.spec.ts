'use strict';

describe('Directive: portoSidebar', function () {

  // load the directive's module and view
  beforeEach(module('meanFullstackApp'));
  beforeEach(module('components/porto-sidebar/porto-sidebar.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<porto-sidebar></porto-sidebar>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).to.equal('this is the portoSidebar directive');
  }));
});
