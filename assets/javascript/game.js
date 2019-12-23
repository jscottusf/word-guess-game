//delcare variables
var wordChoices = ["cat", "dog", "mouse"];
var playerGuess;
var wordBoard = "_ _ _ _ _";
var wordBoardText;
var guessesLeft;
var guesses = [];
var guessesText;
var guessesLeft = 12;
var guessesLeftText;
var winsText;
var wins = 0;
var winner;


//assign variables to html
winsText = document.getElementById("winsText");
wordBoardText = document.getElementById("wordBoardText");
guessesLeftText = document.getElementById("guessesLeftText");
guessesText = document.getElementById("guessesText");
winner = document.getElementById("winner");
setWord();
setScore();
console.log(word);

//main game loop
document.onkeyup = function(event) {
    playerGuess = event.key;
    console.log(playerGuess);
    winner.innerHTML = " ";

    //check that key is a lower case letter
    

    
    

    setScore();
    
        
    
};

function setWord() {
    word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    for (var i = 0; i < word.length; i++) {
        word.CharAt(i) = '_';
    }
}

function setScore() {
    winsText.innerHTML = wins;
    guessesLeftText.innerHTML = guessesLeft;
    guessesText.innerHTML = guesses;
    wordBoardText.innerHTML = word;
}

function showGuesses() {
    guesses.push(playerGuess);
}

