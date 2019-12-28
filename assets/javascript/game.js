//delcare variables
var wordChoices = ["sacramento", "honolulu", "montgomery", "juneau", "phoenix", "little rock", "denver", "hartford", "dover", "tallahassee", "atlanta", "boise", "springfield", "indianapolis", "des moines", "topeka", "frankfort", "baton rouge", "augusta", "annapolis", "boston", "lansing", "saint paul", "jackson", "jefferson city", "helena", "lincoln", "carson city", "concord", "trenton", "santa fe", "albany", "raleigh", "bismark", "columbus", "oklahoma city", "salem", "harrisburg", "providence", "columbia", "pierre", "nashville", "austin", "salt lake city", "montpelier", "richmond", "olympia", "charleston", "madison", "cheyenne"];

var wordInfo = {
    "raleigh" : {
    name : "Raleigh, North Carolina", 
    fact : "North Carolina: Mounatins and Ocean. BBQ and Craft Beer. Blue skies and whiskey.", 
    img : "raleigh" },
    "tallahassee" : {
    name : "Tallahassee, Florida",
    fact : "Florida is a terrible place to live. It's an even worse place to die. Remeber that when you get older",
    img : "tallahassee"},
    "sacramento" : {
    name : "Sacremento, California", 
    fact : "fact", 
    img : "ca" },
    "honolulu" : {
    name : "Honolulu, Hawaii",
    fact : "fact",
    img : "hi"},
    "montgomery" : {
    name : "Montgomery, Alabama", 
    fact : "fact", 
    img : "al" },
    "juneau" : {
    name : "Juneau, Alaska",
    fact : "fact",
    img : "ak"},
    "phoenix" : {
    name : "Phoenix, Arizon",
    fact : "fact",
    img : "az"},
    "little rock" : {
    name : "Little Rock, Arkansas",
    fact : "fact",
    img : "ar"},
    "denver" : {
    name : "Denver, Colorado",
    fact : "fact",
    img : "co"},
    "hartford" : {
    name : "Hartford, Connecticut",
    fact : "fact",
    img : "ct"},
    "dover" : {
    name : "Dover, Deleware",
    fact : "fact",
    img : "de"},
    "atlanta" : {
    name : "Atlanta, GA",
    fact : "fact",
    img : "ga"},
    "boise" : {
    name : "Boise, Idaho",
    fact : "fact",
    img : "id"},
    "springfield" : {
    name : "Springfield, Illinois",
    fact : "fact",
    img : "il"},
    "indianapolis" : {
    name : "Indianapolis, Indiana",
    fact : "fact",
    img : "in"},
    "des moines" : {
    name : "Des Moines, Iowa",
    fact : "fact",
    img : "ia"},
    "topeka" : {
    name : "Topeka, Kansas",
    fact : "fact",
    img : "ks"},
    "frankfort" : {
    name : "Frankford, Kentucky",
    fact : "fact",
    img : "ky"},
    "baton rouge" : {
    name : "Baton Rouge, Louisiana",
    fact : "fact",
    img : "la"},
    "augusta" : {
    name : "Augusta, Maine",
    fact : "fact",
    img : "me"},
    "annapolis" : {
    name : "Annapolis, Maryland",
    fact : "fact",
    img : "md"},
    "boston" : {
    name : "Boston, Massachusetts",
    fact : "fact",
    img : "ma"},
    "lansing" : {
    name : "Lansing, Michigan",
    fact : "fact",
    img : "mi"},
    "saint paul" : {
    name : "Saint Paul, Minnesota",
    fact : "fact",
    img : "mn"},
    "jackson" : {
    name : "Jackson, Mississippi",
    fact : "fact",
    img : "ms"},
    "jefferson city" : {
    name : "Jefferson City, Missouri",
    fact : "fact",
    img : "mo"},
    "helena" : {
    name : "Helena, Montana",
    fact : "fact",
    img : "mt"},
    "lincoln" : {
    name : "Lincoln, Nebraska",
    fact : "fact",
    img : "ne"},
    "carson city": {
    name : "Carson City, Nevada",
    fact : "fact",
    img : "nv"},
    "concord" : {
    name : "Concord, New Hampshire",
    fact : "fact",
    img : "nh"},
    "trenton" : {
    name : "Trenton, New Jersey",
    fact : "fact",
    img : "nj"},
    "santa fe" : {
    name : "Santa Fe, New Mexico",
    fact : "fact",
    img : "nm"},
    "albany" : {
    name : "Albany, New York",
    fact : "fact",
    img : "ny"},
    "bismark" : {
    name : "Bismark, North Dakota",
    fact : "fact",
    img : "nd"},
    "columbus" : {
    name : "Columbus, Ohio",
    fact : "fact",
    img : "oh"},
    "oklahoma city" : {
    name : "Oklahoma City (OKC), Oklahoma",
    fact : "fact",
    img : "ok"},
    "salem" : {
    name : "Salem, Oregon",
    fact : "fact",
    img : "or"},
    "harrisburg" : {
    name : "Harrisburg, Pennslyvania",
    fact : "fact",
    img : "pa"},
    "providence" : {
    name : "Providence, Rhode Island",
    fact : "fact",
    img : "ri"},
    "columbia" : {
    name : "Columbia, South Carolina",
    fact : "fact",
    img : "sc"},
    "pierre" : {
    name : "Pierre, South Dakota",
    fact : "fact",
    img : "sd"},
    "nashville" : {
    name : "Nashville, Tennessee",
    fact : "fact",
    img : "tn"},
    "austin" : {
    name : "Austin, Texas",
    fact : "fact",
    img : "tx"},
    "salt lake city" : {
    name : "Salt Lake City, Utah",
    fact : "fact",
    img : "ut"},
    "montpelier" : {
    name : "Montpelier, Vermont",
    fact : "fact",
    img : "vt"},
    "richmond" : {
    name : "Richmond, Virginia",
    fact : "fact",
    img : "va"},
    "olympia" : {
    name : "Olympia, Washington",
    fact : "fact",
    img : "wa"},
    "charleston" : {
    name : "Charleston, West Virgina",
    fact : "fact",
    img : "wv"},
    "madison" : {
    name : "Madison, Wisconsin",
    fact : "fact",
    img : "wi"},
    "cheyenne" : {
    name : "Cheyenne, Wyoming",
    fact : "fact",
    img : "wy"}
    };

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
var nameText;
var factText;
var alert = "";
var alertText;


//assign variables to html
winsText = document.getElementById("winsText");
wordBoardText = document.getElementById("wordBoardText");
guessesLeftText = document.getElementById("guessesLeftText");
guessesText = document.getElementById("guessesText");
winnerText = document.getElementById("winnerText");
nameText = document.getElementById("nameText");
factText = document.getElementById("factText");
alertText = document.getElementById("alertText");
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
    alertMessage(" ");

    if (alphabet.indexOf(lowerPlayerGuess) === -1) {
        alertMessage("Please choose a lower case letter from a - z")
    }
    else if (guessesLeft === 0) {
        resetScore();
    }
    else if ((wordBoard.indexOf("_") === -1)) {
        resetGame();
        setScore();
    }
    else if ((guesses.indexOf(lowerPlayerGuess) != -1) || (wordBoard.indexOf(lowerPlayerGuess) != -1)) {
        alertMessage("You have already chosen this letter")
    }   
    else {
        if (word.indexOf(lowerPlayerGuess) === -1) {
            showGuesses();
            guessesLeft--;
        }
        if (guessesLeft === 0) {
            winner = word
            resetLoss();
        }
        
        
        for (var j = 0; j < word.length; j++) {
            if (word.charAt(j) === lowerPlayerGuess) {
                wordBoard = setCharAt(wordBoard, j, lowerPlayerGuess);
            }
            if (wordBoard.indexOf("_") === -1) {
                wordBoard = setCharAt(wordBoard, j, lowerPlayerGuess);
                winner = word;
                alertMessage("Well done, press any letter to play again.");
                break;
            }
        }
        setScore();
    }
};

//choose random word/topic from array. scan word/top and display underlines for each letter
function setWord() {
    word = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    var index = wordChoices.indexOf(word);
    if (index > -1) {
    wordChoices.splice(index, 1);
    }
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
}

function showGuesses() {
    guesses.push(lowerPlayerGuess);
}

function setCharAt(str, index, chr) {
    if(index > str.length-1) return str;
	return str.substr(0,index) + chr + str.substr(index+1);
}

function setFacts() {
    nameText.innerHTML = wordInfo[winner].name;
    factText.innerHTML = wordInfo[winner].fact;
    document.getElementById("img").src="./assets/images/" + wordInfo[winner].img + ".jpg";
}

function resetScore() {
    wordBoard = "";
    guessesLeft = 12;
    guesses = [];
    setWord();
    setScore();
    setFacts();
}

function resetGame() {
    wins++;
    resetScore();
}

function resetLoss() {
    alertMessage(wordInfo[winner].name + " was the capital you were looking for. Press any letter to play again.");
}

function alertMessage(message) {
    alert = message;
    alertText.innerHTML = alert;
}