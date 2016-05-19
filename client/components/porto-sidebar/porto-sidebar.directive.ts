'use strict';

(function(){

var portoSidebar = function() {
    return {
      templateUrl: 'components/porto-sidebar/porto-sidebar.html',
      restrict: 'E',
      controller: 'portoSidebarController',
      link: function (scope, element, attrs) {
      }
    };
};

angular.module('meanFullstackApp')
  .directive('portoSidebar', portoSidebar);

})();


