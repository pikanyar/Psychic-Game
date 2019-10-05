//create an array of letters
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "y", "w", "x", "z"];
let wins = 0;
let lossess = 0;
let guessesLeft = 9;
let guesses = [];

// HTML variables
let winHtml = document.getElementById('wins');
winHtml.innerHTML = 'Wins:    ' + wins;

let losCase = document.getElementById("lossess");
losCase.innerHTML = 'Lossess:    ' + lossess;
// console.log(guessesLeft);

let gues = document.getElementById("guessleft");
gues.innerHTML = 'Guess left:    ' + guessesLeft;

let guesShow = document.getElementById("guesses");
guesShow.innerHTML = 'Guesses:    ' + guesses;




// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // console.log(event)
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    let computerGuess = letters[Math.floor(Math.random() * letters.length)];
    // guessesLeft = guessesLeft - 1;

    console.log(userGuess);


    console.log(computerGuess);

    //search on array for a value

    if (letters.indexOf(userGuess) > -1) {

        if (userGuess === computerGuess) {
            wins++
            guesses = [];
            winHtml.innerHTML = 'Wins: ' + wins;
            guesShow.innerHTML = 'Guesses:    ' + guesses;
        }

        else {
            lossess++;
            guessesLeft--;
            guesses.push(userGuess);

            losCase.innerHTML = 'Losses:  ' + lossess;
            gues.innerHTML = 'Guess left:    ' + guessesLeft;
            guesShow.innerHTML = 'Guesses:    ' + guesses;
            // let losCase = $("<p>")
            // losCase.text(lossess);
            // $("#lossess").append(losCase);

            // let lossHtml = $("#lossess")
            // console.log('lossess', lossess);
            // console.log(typeof lossess)
            // $(lossHtml).append(lossess);
            //alert("computer win");

        }

        if (guessesLeft === 0) {
            guessesLeft = 9;
            lossess = 0;
            wins = 0;
            guesses = [];
            // $("#guesslefts").text(guessleft);
            alert("start over");

            losCase.innerHTML = 'Lossess:    ' + lossess;
            winHtml.innerHTML = 'Wins:    ' + wins;
            gues.innerHTML = 'Guess left:    ' + guessesLeft;
            guesShow.innerHTML = 'Guesses:    ' + guesses;
        }
    }
}