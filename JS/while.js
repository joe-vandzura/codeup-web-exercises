"use strict";

//While Loops - Exercise 1
console.log("While Loops - Exercise 1");

let x = 2;

while (x < 65537) {
    console.log(x);
    x*=2;
}


//While Loops - Exercise 2
console.log("While Loops - Exercise 2");

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;


do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
     if ((allCones - conesBought) > 0) {
         if (conesBought === 1) {
             console.log(`${conesBought} cone sold...`)
             allCones -= conesBought;
         }
         else {
             console.log(`${conesBought} cones sold...`);
             allCones -= conesBought;
         }
    }
    else if ((allCones - conesBought) < 0) {
        console.log(`Cannot sell you ${conesBought}, I only have ${allCones}...`);
    }
    else if ((allCones - conesBought) === 0) {
        allCones -= conesBought;
        console.log("Yay, I sold them all!");
    }
} while (allCones > 0)