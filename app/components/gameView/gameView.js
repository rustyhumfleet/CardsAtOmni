'use strict';

angular
	.module('myApp.gameView', ['ngRoute'])
	.controller('gameViewCtrl', ['$scope', function($scope) {
	$scope.deckOfCards = buildDeck();
	$scope.selectedCard = buildCard(0, true, "Please Select A Card");
	$scope.customCard = buildCard(0, false, "Fill in the text for a custom card.");

	$scope.playerCardClicked = function(id) {		
		$scope.deckOfCards[id].selected = !$scope.deckOfCards[id].selected;
		if($scope.deckOfCards[id].selected){
			$scope.cardMessage = $scope.deckOfCards[id].message;
			$scope.selectedCard.message = $scope.cardMessage;
		}		
	};	

	$scope.setMessage = function(card) {
		card.message = "";
	};

	$scope.reset = function () {
		$scope.deckOfCards.forEach(function(card) {
	    	card.selected = false;
    	});
    	$scope.selectedCard = buildCard(0, true, "Please Select A Card");
    };

    $scope.selectCustomCard = function (card) {    	
    	$scope.customCard.message = card.message;
    	$scope.customCard.selected = true;
    	$scope.selectedCard.message = $scope.customCard.message;
    	$scope.selectedCard.selected = $scope.customCard.selected;
    };


}]);

function buildCard(id, selected, message) {
	var card = {
			 	id: id,
		 		selected: selected,
		 		message: message
	 };
	 return card;
};

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