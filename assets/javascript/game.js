
//variable to set letters available
var computerChoices = ["a,", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//setting all to zero
var wins = 0;
var losses = 0;
var userGuess = 9;
var guessesLeft = 9
var guessesSoFar = []
var computerGuess = 0;

//functions
function startGame() {
    //random letter chosen
    computerGuess = 
        computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    //resets guesses back to 9
    guessesLeft = 9;

    //updates HTML to reflect reset
    document.getElementById("guessesLeft").innerHTML = guessesLeft;

    //wrong guesses cleared
    guessesSoFar = [];

   //updates HTML to reflect reset
   document.getElementById("lettersGuessed").innerHTML = guessesSoFar; 
};

function checkResults(){
    //user inputs guess
    document.onkeyup = function () {
        userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    }
}

//user guess is compared to computer guess
    //incorrect guess
    if (userGuess !== computerGuess) {
        alert("Try again!");

    //update number of guesses left
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    
    //update letters guessed
    guessesSoFar;
    }

    else if ((userGuess == computerGuess)) {
        alert("You chose correctly!")
    //update wins counter
        wins++;
    //update HTML
    document.getElementById("winCounter").innerHTML = wins;

    //restart game
        startGame();
        console.log(userGuess);
    
    }


