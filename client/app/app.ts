(function () {
  'use strict';

  var module = angular.module('meanFullstackApp', [
    'ngComponentRouter'
  ]);

  module.value('$routerRootComponent', 'appMainComponent');

  module.config(function($locationProvider) {
      $locationProvider.html5Mode(true);
    });

})(); 
