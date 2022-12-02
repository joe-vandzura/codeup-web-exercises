(function() {
    "use strict";

    /**
     * TODO: DONE
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    console.log("---------------Exercise 1---------------");
    var person = new Object();

    person.firstName = "Joey";
    person.lastName = "Vandzura";

    console.log(person);
    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO: DONE
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log("---------------Exercise 2---------------");
    person.sayHello = function () {
        return `Hello from ${person.firstName} ${person.lastName}!`;
    };

    console.log(person.sayHello());


    /** TODO: DONE
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    console.log("---------------Exercise 3---------------");
     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];

     /*shoppers.forEach(function (person) {
         if (shoppersamount > 200) {
             let discountPercent = .12;
             let newPrice = shoppers[i].amount * (1 - discountPercent);
             let discountAmount = shoppers[i].amount * discountPercent;
             console.log(`Congrats ${shoppers[i].name}, you got a discount! Your total before was $${shoppers[i].amount.toFixed(2)}, now it is $${newPrice.toFixed(2)} after your discount of $${discountAmount.toFixed(2)} was added.`);
         } else {
             let discountThreshold = 200;
             let moneyLeft = discountThreshold - shoppers[i].amount;
             console.log(`Sorry ${shoppers[i].name}, you still need to spend $${moneyLeft.toFixed(2)} before receiving the 12% discount!`);
         }
     });*/

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

        shoppers.forEach((shopper) => {
        if (shopper.amount > 200) {
            let discountPercent = .12;
            let newPrice = shopper.amount * (1 - discountPercent);
            let discountAmount = shopper.amount * discountPercent;
            console.log(`Congrats ${shopper.name}, you got a discount! Your total before was $${shopper.amount.toFixed(2)}, now it is $${newPrice.toFixed(2)} after your discount of $${discountAmount.toFixed(2)} was added.`);
        } else {
            let discountThreshold = 200;
            let moneyLeft = discountThreshold - shopper.amount;
            console.log(`Sorry ${shopper.name}, you still need to spend $${moneyLeft.toFixed(2)} before receiving the 12% discount!`);
        }
    });

    /*for (let i = 0; i < shoppers.length; i++) {
        if (shoppers[i].amount > 200) {
            let discountPercent = .12;
            let newPrice = shoppers[i].amount * (1 - discountPercent);
            let discountAmount = shoppers[i].amount * discountPercent;
            console.log(`Congrats ${shoppers[i].name}, you got a discount! Your total before was $${shoppers[i].amount.toFixed(2)}, now it is $${newPrice.toFixed(2)} after your discount of $${discountAmount.toFixed(2)} was added.`);
        } else {
            let discountThreshold = 200;
            let moneyLeft = discountThreshold - shoppers[i].amount;
            console.log(`Sorry ${shoppers[i].name}, you still need to spend $${moneyLeft.toFixed(2)} before receiving the 12% discount!`);
        }
    }*/


    /** TODO: DONE
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    console.log("---------------Exercise 4---------------");
    var books = [
        {title: "The Cat in the Hat", author: {firstName: "Dr.", lastName: "Seuss"}},
        {title: "The Lightning Thief", author: {firstName: "Rick", lastName: "Riordan"}},
        {title: "The Enemy", author: {firstName: "Charlie", lastName: "Higson"}},
        {title: "Lone Survivor", author: {firstName: "Marcus", lastName: "Luttrell"}},
        {title: "American Sniper", author: {firstName: "Chris", lastName: "Kyle"}}
    ];

    for (let i = 0; i < books.length; i++) {
        console.log(books[i].title);
        console.log(books[i].author.firstName);
        console.log(books[i].author.lastName);
    }


    /**
     * TODO: DONE
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    console.log("---------------Exercise 5---------------");
    for (let i = 0; i < books.length; i++) {
        let count = i + 1;
        console.log(`Book # ${count}`);
        console.log(`Title: ${books[i].title}`);
        console.log(`Author: ${books[i].author.firstName} ${books[i].author.lastName}`);
        console.log("---");
        count++;
    }


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    console.log("---------------Bonus Exercise---------------");
    var library = [];
    var book = {};

    function createBook() {
        do {
            var userChoice = confirm("Would you like to add a book?");
            if (userChoice === false) {
                break;
            }
            book = {
                title: prompt("Please type in the name of the book."),
                author: prompt("Please type in the first and last name of the author.")
            };
            library.push(book);
        } while (userChoice === true)
        return library;
    }

    function showBookInfo(library) {
        for (let i = 0; i < library.length; i++) {
            console.log(library[i]);
        }
    }

    console.log(createBook());
    showBookInfo(library);

})();