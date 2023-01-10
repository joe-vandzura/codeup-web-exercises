"use strict";

// For Loops - Exercise 2
console.log("--------------------For Loops - Exercise 2--------------------");
let num = prompt("Please pick a number from one to ten");
while (num > 10 || num < 1) {
    num = prompt("You chose a number outside of range. Please pick a number from one to ten");
}
function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${(num * i)}`);
    }
}
//The commented code below is a complete multiplication table
/*function showMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            let ans = num * j;
            console.log(num + " * " + j + " = " + ans);
        }
        num++;
    }
}*/
showMultiplicationTable(num);


// For Loops - Exercise 3
console.log("--------------------For Loops - Exercise 3--------------------");
for (let i = 0; i < 10; i++) {
    let random = Math.floor((Math.random() * (180)) + 20);
    let oddOrEven;
    if (random % 2 == 0)
        oddOrEven = "even";
    else
        oddOrEven = "odd";
    console.log(`${random} is ${oddOrEven}`);
}


// For Loops - Exercise 4
console.log("--------------------For Loops - Exercise 4--------------------");
//The commented code below is the answer using a while loop inside of a for loop
/*for (let i = 1; i < 10; i++) {
    let count = 0;
    while (i > count) {
        console.log(i);
        count++;
    }
}*/
//The code below is the answer using two for loops
for (let i = 1; i < 10; i++) {
    let count = 0;
    for (let j = 1; i > count; j++) {
        console.log(i);
        count++;
    }
}


// For Loops - Exercise 5
console.log("--------------------For Loops - Exercise 5--------------------");
for (let i = 100; i > 0; i-=5) {
    console.log(i);
}
