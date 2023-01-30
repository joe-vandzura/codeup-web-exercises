"use strict";

const usernameInput = document.getElementById("username-input");
const usernameButton = document.getElementById("username-button");

usernameButton.addEventListener("click", () => {
    console.log(latestCommit(usernameInput.value, DOCS_API_KEY));
    usernameInput.value = "";
});

     function latestCommit(username, API_KEY) {
          return fetch(`https://api.github.com/users/${username}/events`,
             {
                 headers:
                     {
                         'Authorization': `token ${API_KEY}`
                     }
             })
            .then(response => response.json())
            .then(data => {
                return new Date(data.filter((event) => event.type === "PushEvent")[0].created_at);
            })
    }


const numberInput = document.getElementById("number-input");
const numberButton = document.getElementById("number-button");

numberButton.addEventListener("click", () => {
    const request = wait(numberInput.value);
    request.then(message => console.log(message));
    numberInput.value = "";
});

    function wait(number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`You\'ll see this after ${number/1000} seconds`);
            }, number);
        });
    }