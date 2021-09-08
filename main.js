let Phrase = require("mhartl-palindrome");


function palindromeTester(event){
    event.preventDefault();

    let phrase = new Phrase(event.target.phrase.value);
    let palindromeResult = document.querySelector("#palindromeResult");

    if (phrase.palindrome()) {
        palindromeResult.innerHTML = `${phrase.content} is a palindrome. Yay!`;
    } else {
        palindromeResult.innerHTML =`Sorry, ${phrase.content} isn't a palindrome.`;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector("#palindromeTester");

    button.addEventListener("submit", function () {
        palindromeTester(event);
    });
});



