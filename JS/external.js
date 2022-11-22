//Exercise 1 - JS w/ HTML
console.log("Hello from external JavaScript");

//Exercise 2 - JS w/ HTML
alert("Welcome to my Website!");
let favColor = prompt("What is your favorite color?");
alert(`Great, ${favColor} is my favorite color too!`);

//Exercise 3 - JS w/ HTML

    //Bullet Point 1 - Movies
alert("Please type how many days you will be renting out the following three movies.");
var lilMermaidDays = prompt("How many days will you rent The Little Mermaid?");
var broBearDays = prompt("How many days will you rent Brother Bear?");
var hercDays = prompt("How many days will you rent Hercules?");
var pricePerMovie = 3;
var totalCost = (lilMermaidDays * pricePerMovie) + (broBearDays * pricePerMovie) + (hercDays * pricePerMovie);
alert(`The total cost for renting the movies is $${totalCost}.`);

    //Bullet Point 2 - Contractor
/*alert("Please type both your hourly rate and amount of hours that you worked for the following three companies.");
var googlePay = prompt("What is your hourly rate at Google?");
var googleHours = prompt("How many hours did you work for Google this week?");
var amazonPay = prompt("What is your hourly rate at Amazon?");
var amazonHours = prompt("How many hours did you work for Amazon this week?");
var faceookPay = prompt("What is your hourly rate at Facebook?");
var facebookHours = prompt("How many hours did you work for Facebook this week?");
var totalIncome = (googlePay * googleHours) + (amazonPay * amazonHours) + (faceookPay * facebookHours);
alert(`You made $${totalIncome} this week! FAT STACKS!!!`);
*/