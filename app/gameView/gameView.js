'use strict';

angular.module('myApp.gameView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gameView', {
    templateUrl: 'gameView/gameView.html',
    controller: 'gameViewCtrl'
  });
}])

.controller('gameViewCtrl', [function() {

}]);

function playerCardClicked() {
	
};