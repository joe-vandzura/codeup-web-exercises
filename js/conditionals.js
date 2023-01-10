"use strict";

/* ########################################################################## */

/**
 * TODO: DONE
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/*
function analyzeColor(color){
    if (randomColor === 'red')
        console.log("RED is the color of the blood of my enemies.");
    else if (randomColor === 'orange')
        console.log("ORANGE is the color of...an orange...lol.");
    else if (randomColor === 'yellow') {
        console.log("YELLOW is the color of the sun...OK, you can stop looking at the sun now.");
        console.log("OK, seriously, STOP LOOKING AT THE SUN!!!");
    }
    else if (randomColor === 'green')
        console.log("GREEN is the color of CASH MONEY a.k.a. FAT STACKS.");
    else if (randomColor === 'blue')
        console.log("BLUE is the color of the sky...unless it's night, then it's just black.");
    else if (randomColor === 'indigo')
        console.log("INDIGO is the color of an indigo-colored orange.");
    else if (randomColor === 'violet')
        console.log("VIOLET is the name of the flower from that stupid poem that is actually blue, apparently.");
    else
        console.log("I don't know what that color is, it's not on the rainbow.");
}

analyzeColor(randomColor);
*/


/**
 * TODO: DONE
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO: DONE
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

/*
var analyzeColor = randomColor;

switch (analyzeColor.toLowerCase()){
    case 'red':
        console.log("RED is the color of the blood of my enemies.");
        break;
    case "orange":
        console.log("ORANGE is the color of...an orange...lol.");
        break;
    case "yellow":
        console.log("YELLOW is the color of the sun...OK, you can stop looking at the sun now.");
        console.log("OK, seriously, STOP LOOKING AT THE SUN!!!");
        break;
    case 'green':
        console.log("GREEN is the color of CASH MONEY a.k.a. FAT STACKS.");
        break;
    case "blue":
        console.log("BLUE is the color of the sky...unless it's night, then it's just black.");
        break;
    case "indigo":
        console.log("INDIGO is the color of an indigo-colored orange.");
        break;
    case "violet":
        console.log("VIOLET is the name of the flower from that stupid poem that is actually blue, apparently.");
        break;
    default:
        console.log("I don't know what that color is, it's not on the rainbow.");
        break;
}
*/

/**
 * TODO: DONE
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var analyzeColor = prompt("What is your favorite color of the rainbow");

switch (analyzeColor.toLowerCase()){
    case 'red':
        alert("RED is the color of my wife's face when I get on Xbox.");
        break;
    case "orange":
        alert("ORANGE is the color of...an orange...lol.");
        break;
    case "yellow":
        alert("YELLOW is the color of the sun...OK, you can stop looking at the sun now.");
        alert("OK, seriously, STOP LOOKING AT THE SUN!!!");
        break;
    case 'green':
        alert("GREEN is the color of CASH MONEY a.k.a. FAT STACKS.");
        break;
    case "blue":
        alert("BLUE is the color of the sky...unless it's night, then it's just black.");
        break;
    case "indigo":
        alert("INDIGO is the color of an indigo-colored orange.");
        break;
    case "violet":
        alert("VIOLET is the name of the flower from that stupid poem that is actually blue, apparently.");
        break;
    default:
        alert("I don't know what that color is, it's not on the rainbow.");
        break;
}


/* ########################################################################## */

/**
 * TODO: DONE
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let totalBill = prompt("Please enter the total of your bill.");



function calculateTotal(luckyNum, cost) {
    if (isNaN(parseInt(cost)) == false && cost > 0) {
        if (luckyNum === 0) {
            alert(`Your lucky number was ${luckyNum}, so your total is still $${cost}.`);
        } else if (luckyNum === 1) {
            alert(`Your lucky number was ${luckyNum}, your total before was $${cost}, and now it is $${cost - (cost * .1)}!`);
        } else if (luckyNum === 2) {
            alert(`Your lucky number was ${luckyNum}, your total before was $${cost}, and now it is $${cost - (cost * .25)}!`);
        } else if (luckyNum === 3) {
            alert(`Your lucky number was ${luckyNum}, your total before was $${cost}, and now it is $${cost - (cost * .35)}!`);
        } else if (luckyNum === 4) {
            alert(`Your lucky number was ${luckyNum}, your total before was $${cost}, and now it is $${cost - (cost * .1)}!`);
        } else if (luckyNum === 5) {
            alert(`Your lucky number was ${luckyNum}, so now your total is $0! Congrats!`);
        }
    }
    else {
        alert("You did not enter a correct numerical value");
    }
}


/**
 * TODO: DONE
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
calculateTotal(luckyNumber, totalBill);//This step is completed in above code

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function oddOrEven(input){
    if (input == 0) {
       alert("Your number is...NEITHER ODD OR EVEN!");
         }
    else if (input % 2 !== 0) {
        alert("Your number is...ODD!");
         }
    else if (input % 2 === 0) {
         alert("Your number is...EVEN!");
        }
}

function plusOneHundred(input) {
    alert(`Your number plus one hundred is ${parseInt(input) + 100}`);
}
function isPositiveOrNegative(input) {
    if (input > 0) {
        alert("Your number is...POSITIVE!");
    }
    else if (input < 0) {
        alert("Your number is...NEGATIVE!");
    }
    else {
        alert("Your number is...NEITHER POSITIVE NOR NEGATIVE BECAUSE IT IS ZERO!");
    }
}

function numInput(){
    let userNum = prompt("Please type your number.");
    if (isNaN(parseInt(userNum)) == true)
        alert("You didn't type in a number :(");
    else {
            oddOrEven(parseInt(userNum));
            plusOneHundred(userNum);
            isPositiveOrNegative(userNum);
    }
}


let userInput = confirm("Would you like to enter a number?");

if (userInput == true)
    numInput();
else
    alert("Okay, boomer...");
