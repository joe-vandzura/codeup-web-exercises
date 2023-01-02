"use strict";

var deck = [];

function deckOfCards() {
    function addFaceCards(suit) {
        let face = ["ace", "jack", "queen", "king"];
        for (let i = 0; i < face.length; i++) {
            let newFaceCard = {rank: face[i], suit: suit}
            if (newFaceCard.rank !== "ace") {
                newFaceCard.value = 10;
            } else if (newFaceCard.rank === "ace") {
                newFaceCard.value = 11;
                newFaceCard.loseValue = 1;
            }
            deck.push(newFaceCard);
        }
    }

    function addNumberCards(suit) {
        for (let i = 2; i < 11; i++) {
            let newNumberCard = {rank: i, suit: suit, value: i}
            deck.push(newNumberCard);
        }
    }

    addNumberCards("spades");
    addNumberCards("clubs");
    addNumberCards("hearts");
    addNumberCards("diamonds");
    addFaceCards("spades");
    addFaceCards("clubs");
    addFaceCards("hearts");
    addFaceCards("diamonds");
    //deck.sort(() => Math.random() - 0.5);
}

    function resetDeck() {
    deck = [];
    deckOfCards();
    }

    deckOfCards();
console.log(deck);