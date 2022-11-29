"use strict";

// Break and Continue Exercise
console.log("Break and Continue Exercise");

let userOddNum = prompt("Please pick an odd number between 1 and 50.");

for (let i = 0; i < 100; i++)

    if (userOddNum % 2 !== 0 && (userOddNum > 0 && userOddNum < 51)) {
        console.log(`Number to skip is: ${userOddNum}`);
        break;
    }
    else {
        userOddNum = prompt("Please try again. Remember to pick a number between 1 and 50.")
        i--;
    }

for (let i = 1; i < 50; i++) {
    if (i != userOddNum) {
        console.log("Here is an odd number: " + i);
        i++;
    }
    else {
        console.log("Yikes! Skipping number: " + i);
    }
}

// The code below is solving this exercise with while loops
/*while (userOddNum % 2 === 0) {
    userOddNum = prompt ("You did not pick an odd number. Please pick an odd number between 1 and 50.");
}

while (userOddNum < 1 || userOddNum > 50) {
    userOddNum = prompt("You did not pick an odd number between 1 and 50. Please pick an odd number between 1 and 50.");
}*/

