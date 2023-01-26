"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const trilingualUser = users.filter(user => user.languages.length >= 3);
console.log(trilingualUser);


// Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map(user => user.email);
console.log(userEmails);


// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYearsOfExperience = users.reduce( (total, user) => {
    return total + user.yearsOfExperience;
}, 0);
let average = totalYearsOfExperience / users.length;
console.log(average);


// Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce( ( longestEmail, user) => {
    if (longestEmail.length < user.email.length) {
        return user.email;
    } else {
        return longestEmail;
    }
}, "");
console.log(longestEmail);


// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const singleStringOfNames = users.reduce( (concatentation, user) => {
    if (user === users[users.length-1]) {
        return concatentation + user.name + ".";
    } else {
        return "Your instructors are: " + concatentation + user.name + ", ";
    }
}, '');
console.log(singleStringOfNames);


// Use .reduce to get the unique list of languages from the list of users.
const arrayOfLanguages = users.reduce( (concatentation, user) => {
     user.languages.forEach(language => {
        if (concatentation.includes(language) === false) {
            concatentation.push(language);
        }
    });
     return concatentation;
}, []);
console.log(arrayOfLanguages);