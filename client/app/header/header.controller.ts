'use strict';

(function(){

var HeaderController = function($scope) {
    $scope.message = 'Hello!, greeting from header component';
};

angular.module('meanFullstackApp')
  .component('portoHeader', {
  	templateUrl: 'app/header/header.html',
    controller: HeaderController
  });

})();


