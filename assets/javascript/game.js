// Javascript file for Psychic game


// Player Guesses
var userGuess;
var computerGuess;
// tracking wins/losses
var wins = 0;
var losses = 0;
var guessesLeft = 10;
// tracking user guesses
var guessList = [];
// computer choice array
var compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessNum = Math.floor(Math.random() * compChoice.length);
var computerGuess = compChoice[guessNum];

// console logs for testing variables
console.log(computerGuess);
console.log(guessNum);

// document.getElementById("game").onkeypress = userGuess;


console.log(userGuess);

// trying to at least call a function
// document.getElementById("input").addEventListener("keypress", mainGame);

// Main game code
function mainGame(){
    console.log("its working!");

}


// function compareGuess(user,computer) {
    
//     // append user guess to guestlist
//     // display guess list
//     if(userGuess === computerGuess){
//         //print you win
//         wins++;
//     } else {
//         //alert you lose
//         losses++
//     }

// }




//reload page when complete per: https://stackoverflow.com/questions/16763665/html5-javascript-reset-game-screen
//probably incorrect
// location.reload();

// also this