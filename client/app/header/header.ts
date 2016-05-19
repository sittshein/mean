'use strict';

(function(){

angular.module('meanFullstackApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('header', {
        url: '/header',
        template: '<porto-header></porto-header>'
      });
  });


})();

