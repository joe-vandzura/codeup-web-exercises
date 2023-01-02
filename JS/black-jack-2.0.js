"use strict";

let playerScore = 0;
let computerScore = 0;
let mainMenuChoice;
let playerHand = [];
let computerHand = [];
let gameMenuChoice;
let roundCount = 0;
let computerRoundCount = 0;

function mainMenu() {
    console.log(`Let's Play BlackJack!!!\nYour score: ${playerScore}\t\tComputer Score: ${computerScore}\nMAIN MENU\n\t\t1. Play Blackjack\n\t\t2. Exit Game\nChoose 1 or 2 and press Enter: `);
    prompt()
}