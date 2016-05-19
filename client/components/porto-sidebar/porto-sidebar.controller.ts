'use strict';

(function(){

var portoSidebarController = function($scope) {
    $scope.message = 'Hello';
};

angular.module('meanFullstackApp')
  .controller('portoSidebarController', portoSidebarController);

})();

