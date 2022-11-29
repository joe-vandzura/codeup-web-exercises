(function(){
    "use strict";

    /**
     * TODO: DONE
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Joey", "Lorena", "Candy", "Chicken"];

    /**
     * TODO: DONE
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("Exercise 2");

    console.log(names.length);

    /**
     * TODO: DONE
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log("Exercise 3");

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO: DONE
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    console.log("Exercise 4");

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    /**
     * TODO: DONE
     * Refactor your above code to use a `forEach` loop
     */

    console.log("Exercise 5");

    names.forEach(function (name) {
        console.log(name);
    });

    /**
     * TODO: DONE
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    console.log("Exercise 6");

    function firstElement(array) {
        return array[0];
    }

    function secondElement(array) {
        return array[1];
    }

    function lastElement(array) {
        return array[array.length-1];
    }

    console.log(firstElement(names));
    console.log(secondElement(names));
    console.log(lastElement(names));
})();