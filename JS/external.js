"use strict"
//Exercise 1 - JS w/ HTML
console.log("Hello from external JavaScript");

//Exercise 2 - JS w/ HTML
alert("Welcome to my Website!");
let favColor = prompt("What is your favorite color?");
alert(`Great, ${favColor} is my favorite color too!`);

//Exercise 3 - JS w/ HTML

    //Bullet Point 1 - Movies
alert("Please type how many days you will be renting out the following three movies.");
let lilMermaidDays = prompt("How many days will you rent The Little Mermaid?");
let broBearDays = prompt("How many days will you rent Brother Bear?");
let hercDays = prompt("How many days will you rent Hercules?");
let pricePerMovie = 3;
let totalCost = (lilMermaidDays * pricePerMovie) + (broBearDays * pricePerMovie) + (hercDays * pricePerMovie);
alert(`The total cost for renting the movies is $${totalCost}.`);

    //Bullet Point 2 - Contractor
/*alert("Please type both your hourly rate and amount of hours that you worked for the following three companies.");
let googlePay = prompt("What is your hourly rate at Google?");
let googleHours = prompt("How many hours did you work for Google this week?");
let amazonPay = prompt("What is your hourly rate at Amazon?");
let amazonHours = prompt("How many hours did you work for Amazon this week?");
let facebookPay = prompt("What is your hourly rate at Facebook?");
let facebookHours = prompt("How many hours did you work for Facebook this week?");
let totalIncome = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
alert(`You made $${totalIncome} this week! FAT STACKS!!!`);
*/
