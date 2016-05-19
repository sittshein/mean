'use strict';

angular.module('meanFullstackApp.admin')
  .config(function($stateProvider) {
    $stateProvider

      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        authenticate: 'admin'
      })

      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/admin/dashboard/dashboard-main.html',
        controller: 'AdminController',
        controllerAs: 'dashboard',
        authenticate: 'dashboard'
      });

  });
