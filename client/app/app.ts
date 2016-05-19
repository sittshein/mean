'use strict';

angular.module('meanFullstackApp', [
  'meanFullstackApp.auth',
  'meanFullstackApp.admin',
  'meanFullstackApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
