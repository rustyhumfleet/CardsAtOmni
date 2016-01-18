'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.gameView',
  'myApp.view2',
  'myApp.version'
])
.config(['$routeProvider', function($routeProvider) {
  
  $routeProvider.when('/home', {
      templateUrl: 'components/home/home.html',
      controller: 'homeCtrl'
  })
  .when('/gameView', {
      templateUrl: 'components/gameView/gameView.html',
      controller: 'gameViewCtrl'
    })
  .when('/view2', {
    templateUrl: 'components/view2/view2.html',
    controller: 'View2Ctrl'
  })
  .otherwise({redirectTo: '/home'});
}]);

