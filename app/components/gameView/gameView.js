'use strict';

angular
	.module('myApp.gameView', ['ngRoute'])
	.controller('gameViewCtrl', ['$scope', function($scope) {
	$scope.deckOfCards = buildDeck();
	$scope.selectedCard = "Please Select A Card";

	$scope.playerCardClicked = function(id) {		
		$scope.deckOfCards[id].selected = !$scope.deckOfCards[id].selected;
		if($scope.deckOfCards[id].selected){
			$scope.cardMessage = $scope.deckOfCards[id].message;
			$scope.selectedCard = $scope.cardMessage;
		}		
	};	

	$scope.reset = function () {
		$scope.deckOfCards.forEach(function(card) {
	    	card.selected = false;
    	});
    	$scope.selectedCard = "Please Select A Card";
    };
}]);

function buildDeck() {
	 var deck = [
	 	"dudes dudes dudes",
	 	"whines like a little barking dog",
	 	"drives really slow",
	 	"trololos",
	 	"gays"
	 ];

	var deckReady = [];
	for (var x = 0; x <= 4; x++) {
		 var card = {
		 	id: x,
	 		selected: false,
	 		message: deck[x]
	 	};
	 	deckReady.push(card);
	};
	return deckReady;
};