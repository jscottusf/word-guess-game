//delcare variables
var wordChoices = ["sacramento", "honolulu", "montgomery", "juneau", "phoenix", "little rock", "denver", "hartford", "dover", "tallahassee", "atlanta", "boise", "springfield", "indianapolis", "des moines", "topeka", "frankfort", "baton rouge", "augusta", "annapolis", "boston", "lansing", "saint paul", "jackson", "jefferson city", "helena", "lincoln", "carson city", "concord", "trenton", "santa fe", "albany", "raleigh", "bismark", "columbus", "oklahoma city", "salem", "harrisburg", "providence", "columbia", "pierre", "nashville", "austin", "salt lake city", "montpelier", "richmond", "olympia", "charleston", "madison", "cheyenne"];

// var wordChoices = ["raleigh", "tallahassee"];

// var capitalInfo = {
//     "raleigh": [state : "Raleigh, North Carolina", 
//     fact : "North Carolina is the best state", 
//     picture : "picture?" ],
//     "tallahassee": [
//     state : "Tallehassee, Florida",
//     fact : "no fun facts about Florida exist",
//     picture : "not sure yet" ]
// };

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var playerGuess;
var lowerPlayerGuess;
var wordBoard = "";
var wordBoardText;
var guessesLeft;
var guesses = [];
var guessesText;
var guessesLeft = 12;
var guessesLeftText;
var winsText;
var wins = 0;
var winner = "";
var winnerText;


//assign variables to html
winsText = document.getElementById("winsText");
wordBoardText = document.getElementById("wordBoardText");
guessesLeftText = document.getElementById("guessesLeftText");
guessesText = document.getElementById("guessesText");
winnerText = document.getElementById("winnerText");
setWord();
setScore();
console.log(word);

//main game loop
document.onkeyup = function(event) {
    playerGuess = event.key;
    //convert to lower just to avoid any game glitches / hassel to player
    lowerPlayerGuess = playerGuess.toLowerCase();
    console.log(playerGuess);
    console.log(lowerPlayerGuess)
    winner.innerHTML = " ";

    if (alphabet.indexOf(lowerPlayerGuess) === -1) {
        alert("Please choose a lower case letter from a - z");
    }
    else if (guesses.indexOf(lowerPlayerGuess) != -1) {
        alert("You have already chosen this letter")
    }
    else {
        if (word.indexOf(lowerPlayerGuess) === -1) {
            showGuesses();
            guessesLeft--;
        }
        if (guessesLeft === 0) {
            alert("Sorry, bro. Try again.");
            wordBoard = "";
            guessesLeft = 12;
            guesses = [];
            setWord();
            setScore();
        }
        
        for (var j = 0; j < word.length; j++) {
            if (word.charAt(j) === lowerPlayerGuess) {
                wordBoard = setCharAt(wordBoard, j, lowerPlayerGuess);
            }
            if (wordBoard.indexOf("_") === -1) {
                wins++;
                alert(word + " is correct")
                winner = word;
                wordBoard = "";
                guessesLeft = 12;
                guesses = [];
                setWord();
                setScore();
            }
        }
    setScore();
        
    }
};

//choose random word/topic from array. scan word/top and display underlines for each letter
function setWord() {
    word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) != " ") {
        wordBoard = wordBoard + "_";
        }
        else {
        wordBoard = wordBoard + " ";
        }
    }
}

function setScore() {
    winsText.innerHTML = wins;
    guessesLeftText.innerHTML = guessesLeft;
    guessesText.innerHTML = guesses;
    wordBoardText.innerHTML = wordBoard;
    winnerText.innerHTML = winner
}

function showGuesses() {
    guesses.push(lowerPlayerGuess);
}

function setCharAt(str, index, chr) {
    if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}

function setFacts(){

}