(function(){
    "use strict";

    //-----------------------------------Start of game-----------------------------------

    let userScore = 0;
    let computerScore = 0;
    let mainMenuChoice;
    let deck = [];
    let playerHand = [];
    let computerHand = [];
    let gameMenuChoice;
    let roundCount = 0;


    //-------------------Creates deck of cards------------------------------>
    function deckOfCards() {
        function addFaceCards(suit) {
            let face = ["ace", "jack", "queen", "king"];
            for (let i = 0; i < face.length; i++) {
                let newFaceCard = {rank: face[i], suit: suit}
                deck.push(newFaceCard);
            }
        }

        function addNumberCards(suit) {
            for (let i = 2; i < 11; i++) {
                let newNumberCard = {rank: i, suit: suit}
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
        deck.sort(() => Math.random() - 0.5);
    }




    //----------------------------------------------------------------------^

    function mainMenu() {
        console.log(`Let's Play BlackJack!!!\nYour score: ${userScore}\t\tComputer Score: ${computerScore}\nMAIN MENU\n\t\t1. Play Blackjack\n\t\t2. Exit Game\nChoose 1 or 2 and press Enter: `);
        do {
            mainMenuChoice = prompt("Choose 1 or 2 and Press Enter:");
            if (mainMenuChoice === null || parseFloat(mainMenuChoice) === 2) {
                console.log(endGame());
                break;
            }
        } while (parseFloat(mainMenuChoice) !== 1)
        if (parseFloat(mainMenuChoice) === 1) {
            let playerHandValue = 0;
            let computerHandValue = 0;
            playerHand = [];
            computerHand = [];
            roundCount = 0;
            deckOfCards();
            startGame(playerHandValue, computerHandValue);
        }
    }

    function startGame(playerHandValue, computerHandValue) {
        for(var i = 0; i < 2; i++) {
            playerHand.push(deck[i]);
            deck.splice(i, 1);
        }
        for (let i = 0; i < 2; i++) {
            if (typeof playerHand[i].rank !== "number") {
                playerHandValue += 10;
            } else {
                playerHandValue += playerHand[i].rank;
            }
        }
        for (let i = 0; i < 1; i++) {
            computerHand.push(deck[i]);
            deck.splice(i, 1);
        }
        console.log(`Your hand: ${playerHand[0].rank} of ${playerHand[0].suit}, ${playerHand[1].rank} of ${playerHand[1].suit}\nYour total: ${playerHandValue}\nComputer's hand (first card is face down): ${computerHand[0].rank} of ${computerHand[0].suit}`)
        console.log(gameMenu(playerHandValue, computerHandValue));
    }

    function showHand() {
        for (let i = 0; i < playerHand.length-1; i++) {
            let response = "Your hand: ";
            for (let i = 0; i < playerHand.length; i++) {
                if (i == playerHand.length - 1) {
                    response = response.concat(`${playerHand[i].rank} of ${playerHand[i].suit}`);
                } else {
                    response = response.concat(`${playerHand[i].rank} of ${playerHand[i].suit}, `);
                }
                console.log(response);
            }
        }
    }

    function gameMenu(playerHandValue, computerHandValue) {
        console.log("GAME MENU\n\t\t1. Hit\n\t\t2. Stand\n\t\t3. Return to Main Menu\nChoose 1, 2, or 3 and press Enter: ");
        do {
            gameMenuChoice = prompt("Choose 1, 2, or 3 and Press Enter:");
            if (gameMenuChoice === null || parseFloat(gameMenuChoice) === 3) {
                console.log(endGame());
                break;
            } else if (parseFloat(gameMenuChoice) === 2) {
                break;
            }
        } while (parseFloat(gameMenuChoice) !== 1)
        if (parseFloat(gameMenuChoice) === 1) {
            hitMove(playerHand, playerHandValue, computerHandValue);
        } else if (parseFloat(gameMenuChoice) === 2) {
            console.log("YOU CHOSE 2");
        }
    }

    function hitMove(playerHand, playerHandValue, computerHandValue) {
        playerHand.push(deck[0]);
        deck.splice(0, 1);
        if (typeof playerHand[(roundCount+2)].rank !== "number") {
            playerHandValue += 10;
        } else {
            console.log(`----------------\n${playerHand[(roundCount+2)].rank}\n${typeof playerHand[(roundCount+2)].rank}\n----------------`)
            playerHandValue += playerHand[(roundCount+2)].rank;
        }
        console.log(`You hit: ${playerHand[(roundCount+2)].rank} of ${playerHand[(roundCount+2)].suit}\nYour total: ${playerHandValue}`);
        if (playerHandValue > 21) {
            console.log("BUST!\nLoser!");
            computerScore++;
            mainMenu();
        } else if (playerHandValue < 21) {
            gameMenu();
        } else if (playerHandValue === 21) {
            console.log("COMPUTER BUSTS!\nWinner!");
            userScore++;
            mainMenu();
        }
    }

    function standMove () {
        console.log(`Player stands...\nYour total: ${playerHandValue}`);
    }

    function endGame() {
        console.log("Goodbye!");
    }

    console.log(mainMenu());

})();