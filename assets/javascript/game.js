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
console.log(userGuess);

// var scoreBoard = "<p>Wins: " + wins "</p>" + "<p>Losses: " + losses "</p>" + "<p>Guesses Left: " + guessesLeft "</p>" + "<p>Guesses so far: " + guessList.join(', ') "</p>";



document.getElementById("game").innerHTML = scoreBoard;

document.onkeyup = function(e){
    var userGuess = e.key;
    guessList.push(userGuess);
    mainGame(userGuess,computerGuess);
 }


// Main game code
function mainGame(user,comp){
    console.log("its working!"); //just testing!
    if (user === comp) {
        console.log("you win!"); //testing to see if the logic is working
        wins++;
        console.log(wins);
    } else {
        guessesLeft--;
        console.log(guessesLeft); //testing to see if the logic is working
    }

    if (guessesLeft === 0){
        losses++;
        reset();
    }
   
}

// function to reset scoreboard
function reset(){
    guessesLeft = 10;
    guessList = [];
}




//reload page when complete per: https://stackoverflow.com/questions/16763665/html5-javascript-reset-game-screen
//probably incorrect
// location.reload();

