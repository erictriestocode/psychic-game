// Javascript file for Psychic game


// User Guesses
var userGuess;
var computerGuess;
// tracking wins/losses
var wins = 0;
var losses = 0;
// tracking user guesses
var guessList = [];
// computer choice array
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessNum = Math.floor(Math.random() * compChoice.length);
var computerGuess = compChoice[guessNum];

// console logs for testing variables
console.log(computerGuess);
console.log(guessNum);

function game(){

    

}

















//reload page when complete per: https://stackoverflow.com/questions/16763665/html5-javascript-reset-game-screen
//probably incorrect
// location.reload();

// also this