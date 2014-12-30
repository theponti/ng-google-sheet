describe('Unit: Directives/datagrid', function() {
  'use strict';

  var scope, element, $compile, $rootScope;

  beforeEach(function(done) {
    angular.mock.module('trDatagrid');

    angular.mock.inject(function($compile, $rootScope){
      // The injector unwraps the underscores (_) from around the parameter names when matching
      scope = $rootScope.$new();
      // compile element
      element = $compile("<trdatagrid></trdatagrid>")(scope);
      // fire all the watches, so the scope expressions will be evaluated
      scope.$digest();
      done();
    });
  });

  afterEach(function() {
    element =
    $compile =
    $rootScope = undefined;
  });

  describe('.stocks', function() {
    it('should be defined', function() {
      expect(scope.stocks).toEqual([]);
    });
  });

});
