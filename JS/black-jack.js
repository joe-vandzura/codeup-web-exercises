(function(){
    "use strict";

    //-----------------------------------Start of game-----------------------------------
    let deck = [];
    let playerScore = 0;
    let computerScore = 0;
    let mainMenuChoice;
    let playerHand = [];
    let computerHand = [];
    let gameMenuChoice;
    let roundCount = 0;
    let computerRoundCount = 0;


    //-------------------Creates deck of cards------------------------------>
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
        deck.sort(() => Math.random() - 0.5);
    }




    //----------------------------------------------------------------------^

    function mainMenu() {
        console.log(`Let's Play BlackJack!!!\nYour score: ${playerScore}\t\tComputer Score: ${computerScore}\nMAIN MENU\n\t\t1. Play Blackjack\n\t\t2. Exit Game\nChoose 1 or 2 and press Enter: `);
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
            computerRoundCount = 0;
            deck = [];
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
            if (playerHand[i].rank !== "ace") {
                playerHandValue += playerHand[i].value;
            } else if (playerHand[i].rank === "ace") {
                if (playerHandValue + 11 > 21) {
                    playerHandValue += playerHand[i].loseValue;
                } else if (playerHandValue + 11 <= 21) {
                    playerHandValue += playerHand[i].value;
                }
            }
        }
        computerHand.push(deck[0]);
        deck.splice(0, 1);
        if (playerHandValue === 21) {
            console.log("WOW, YOUR'E LUCKY!\nWinner!");
            mainMenu();
            return;
        }
        console.log(`Your hand: ${playerHand[0].rank} of ${playerHand[0].suit}, ${playerHand[1].rank} of ${playerHand[1].suit}\nYour total: ${playerHandValue}\nComputer's hand (first card is face down): ${computerHand[0].rank} of ${computerHand[0].suit}`);
        computerHandValue += computerHand[0].value;
        console.log(gameMenu(playerHandValue, computerHandValue));
    }

    function showHand(playerHandValue) {
        let responseForPlayer = "Your hand: ";
            for (let i = 0; i < playerHand.length; i++) {
                if (i == playerHand.length - 1) {
                    responseForPlayer = responseForPlayer.concat(`${playerHand[i].rank} of ${playerHand[i].suit}`);
                } else {
                    responseForPlayer = responseForPlayer.concat(`${playerHand[i].rank} of ${playerHand[i].suit}, `);
                }
            }
        console.log(responseForPlayer);
        gameMenu(playerHandValue);
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
            standMove(playerHandValue, computerHandValue);
        }
    }

    function hitMove(playerHand, playerHandValue, computerHandValue) {
        playerHand.push(deck[0]);
        deck.splice(0, 1);
        if (playerHand[roundCount+2].rank !== "ace") {
            playerHandValue += playerHand[roundCount+2].value;
        } else if (playerHand[roundCount+2].rank === "ace") {
            if (playerHandValue + 11 > 21) {
                playerHandValue += playerHand[computerRoundCount+2].loseValue;
            } else if (playerHandValue + 11 <= 21) {
                playerHandValue += playerHand[computerRoundCount+2].value;
            }
        }
        console.log(`You hit: ${playerHand[(roundCount+2)].rank} of ${playerHand[(roundCount+2)].suit}\nYour total: ${playerHandValue}`);
        if (playerHandValue > 21) {
            console.log("BUST!\nLoser!");
            computerScore++;
            mainMenu();
        } else if (playerHandValue < 21) {
            roundCount++;
            showHand(playerHandValue);
        } else if (playerHandValue === 21) {
            console.log("YOU GOT 21!\nWinner!");
            playerScore++;
            mainMenu();
        }
        computerDecision(playerHand, playerHandValue, computerHandValue);
    }

    function standMove (playerHandValue, computerHandValue) {
        console.log(`Player stands...\nYour total: ${playerHandValue}`);
        computerHand.push(deck[0]);
        deck.splice(0, 1);
        let responseForComputer = "Computer's hand: ";
        for (let i = 0; i < computerHand.length; i++) {
            if (i == computerHand.length - 1) {
                responseForComputer = responseForComputer.concat(`${computerHand[i].rank} of ${computerHand[i].suit}`);
            } else {
                responseForComputer = responseForComputer.concat(`${computerHand[i].rank} of ${computerHand[i].suit}, `);
            }
        }
        computerHandValue += computerHand[1].value;
        console.log(responseForComputer);
        computerDecision(playerHandValue, computerHandValue);
    }

        //------------CHANGE COMPUTER DECISION LOGIC HERE-----------------
    function computerDecision(playerHandValue, computerHandValue) {
        if (computerHandValue > playerHandValue) {
            computerStands(playerHandValue, computerHandValue);
        } else if (computerHandValue < playerHandValue) {
            computerHits(playerHandValue, computerHandValue);
        } else {
            if (computerHandValue <= 10) {
                computerHits(playerHandValue, computerHandValue);
            } else if (computerHandValue > 10 && computerHandValue < 15) {
                let computerDecision = Math.floor(Math.random() * 50) + 1;
                if (computerDecision <= 30) {
                    computerHits(playerHandValue, computerHandValue);
                } else if (computerDecision > 30) {
                    computerStands(playerHandValue, computerHandValue);
                }
            } else if (computerHandValue >= 15 && computerHandValue <= 18) {
                let computerDecision = Math.floor(Math.random() * 50) + 1;
                if (computerDecision > 35) {
                    computerHits(playerHandValue, computerHandValue);
                } else if (computerDecision <= 35) {
                    computerStands(playerHandValue, computerHandValue);
                }
            } else if (computerHandValue > 18 && computerHandValue < 21) {
                let computerDecision = Math.floor(Math.random() * 50) + 1;
                if (computerDecision > 45) {
                    computerHits(playerHandValue, computerHandValue);
                } else if (computerDecision <= 45) {
                    computerStands(playerHandValue, computerHandValue);
                }
            } else if (computerHandValue === 21) {
                console.log("COMPUTER GOT 21!\nLOSER!");
                computerScore++;
                mainMenu();
            }
        }
    }

    function computerHits(playerHandValue, computerHandValue) {
        computerHand.push(deck[0]);
        deck.splice(0, 1);
        if (computerHand[computerRoundCount+2].rank !== "ace") {
            computerHandValue += computerHand[computerRoundCount+2].value;
        } else if (computerHand[computerRoundCount+2].rank === "ace") {
            if (computerHandValue + 11 > 21) {
                computerHandValue += computerHand[computerRoundCount+2].loseValue;
            } else if (computerHandValue + 11 <= 21) {
                computerHandValue += computerHand[computerRoundCount+2].value;
            }
        }
        console.log(`Computer hits: ${computerHand[(computerRoundCount+2)].rank} of ${computerHand[(computerRoundCount+2)].suit}`);
        if (computerHandValue > 21) {
            console.log("COMPUTER BUSTS!\nWinner!");
            playerScore++;
            mainMenu();
        } else if (computerHandValue < 21) {
            computerRoundCount++;
            console.log(`Computer total: ${computerHandValue}`);
            computerDecision(playerHandValue, computerHandValue)
        } else if (computerHandValue === 21) {
            console.log("COMPUTER GOT 21!\nLOSER!");
            computerScore++;
            mainMenu();
        }
    }

    function computerStands(playerHandValue, computerHandValue) {
        console.log(`Computer stands...\nComputer total: ${computerHandValue}`);
        if (computerHandValue > playerHandValue) {
            console.log("Loser!");
            computerScore++;
        } else if (computerHandValue < playerHandValue) {
            console.log("Winner!");
            playerScore++;
        } else if (computerHandValue == playerHandValue) {
            console.log("Draw.");
        }
        mainMenu();
    }

    function endGame() {
        console.log("Goodbye!");
    }

    console.log(mainMenu());

})();