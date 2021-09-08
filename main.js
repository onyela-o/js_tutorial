let Phrase = require("mhartl-palindrome");

let string = prompt("Please enter a string for palindrome testing:")
let phrase = new Phrase(string);

if (phrase.palindrome()){
    alert(`${phrase.content} is a palindrome. Yay!`)
} else {
    alert(`Sorry, ${phrase.content} isn't a palindrome.`)
}


