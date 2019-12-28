//delcare variables
var wordChoices = ["sacramento", "honolulu", "montgomery", "juneau", "phoenix", "little rock", "denver", "hartford", "dover", "tallahassee", "atlanta", "boise", "springfield", "indianapolis", "des moines", "topeka", "frankfort", "baton rouge", "augusta", "annapolis", "boston", "lansing", "saint paul", "jackson", "jefferson city", "helena", "lincoln", "carson city", "concord", "trenton", "santa fe", "albany", "raleigh", "bismark", "columbus", "oklahoma city", "salem", "harrisburg", "providence", "columbia", "pierre", "nashville", "austin", "salt lake city", "montpelier", "richmond", "olympia", "charleston", "madison", "cheyenne"];

var wordInfo = {
    "raleigh" : {
    name : "Raleigh, North Carolina", 
    fact : 'Located in the "Research Triangle" of North Carolina, Raleigh is the home of North Carolina State University and is known for great BBQ and craft beer', 
    img : "raleigh" },
    "tallahassee" : {
    name : "Tallahassee, Florida",
    fact : 'Home to Florida State University, Tallahassee is located in the "Panhandle" region of North Florida. While beaches and Walt Disney World bring in tourists from around the world, Florida owes much of its population growth to the invention and widespead use of Air Conditioning',
    img : "tallahassee"},
    "sacramento" : {
    name : "Sacremento, California", 
    fact : "California is the largest state by population in the United States. If California were it's own country, it would have the sixth largest GDP in the world.", 
    img : "ca" },
    "honolulu" : {
    name : "Honolulu, Hawaii",
    fact : "Hawaii's capital of Honolulu sits on the island of Oahu, which is Hawaii's most populated island. Hawaii is the birthplace of US President Barack Obama.",
    img : "hi"},
    "montgomery" : {
    name : "Montgomery, Alabama", 
    fact : "The world's first Electric Trolley System was introduced in Montgomery in 1886. Alabama workers built the first rocket to put humans on the moon and Alabama is the only state with all major natural resources needed to make iron and steel.", 
    img : "al" },
    "juneau" : {
    name : "Juneau, Alaska",
    fact : "Located in a mountainous region of southern Alaska and surrounded by glaciers, Alaska's capital city Juneau is only accessible by air or by sea. Alaska's most important revenue source is the oil and natural gas industry. Alaska accounts for 25% of the oil produced in the United States.",
    img : "ak"},
    "phoenix" : {
    name : "Phoenix, Arizon",
    fact : "Phoenix is the United States’ fifth-largest city with a population of over 1.6 million. According to data compiled by the National Climatic Data Center, Phoenix basks in sunshine more often than any other major metropolitan area in the U.S. The sun shines on Phoenix during 85 percent of its daylight hours.",
    img : "az"},
    "little rock" : {
    name : "Little Rock, Arkansas",
    fact : "Ater the 1954 Brown vs. Board of Education ruling deemed segregation in schools unconstitutional, a group of black students known today as The Little Rock Nine made history as they were escorted into Little Rock Central High School by the Arkansas National Guard per President Dwight D. Eisenhower's order.",
    img : "ar"},
    "denver" : {
    name : "Denver, Colorado",
    fact : 'Known as the “Mile High City," the Denver city nickname is derived from the fact that it sits at an elevation 5,280 feet just east of the Rocky Mountains. The fact that Colorado has also legalized recreational marajuana usage is just a coincidence.',
    img : "co"},
    "hartford" : {
    name : "Hartford, Connecticut",
    fact : 'Hartford resident Mark Twain once said: “Of all the beautiful towns it has been my fortune to see, this is the chief … You do not know what beauty is if you have not been here.” Today, Hartford is know as the "Insurance capital of the wolrd."',
    img : "ct"},
    "dover" : {
    name : "Dover, Deleware",
    fact : "Deleware became the first state to ratify the US Constitution in Dover on December 7, 1787",
    img : "de"},
    "atlanta" : {
    name : "Atlanta, Georgia",
    fact : "Atlanta is the headquarters of Coca-Cola and several other Fortune 500 companies. Georgia is known as the Peach State,but it's also the country's top producer of pecans, peanuts, and vidalia onions.",
    img : "ga"},
    "boise" : {
    name : "Boise, Idaho",
    fact : "Boise is nicknamed The City of Trees. In Boise it's technically illegal to ride a merry-go-round on Sunday.",
    img : "id"},
    "springfield" : {
    name : "Springfield, Illinois",
    fact : "President Abraham Lincoln lived in Springfield from 1837 until 1861 when he moved to the White House. Let's face it though, when you think of Illinois, you probably think of Chicago. Da Bears.",
    img : "il"},
    "indianapolis" : {
    name : "Indianapolis, Indiana",
    fact : "Home to the Indy 500 and the Colts, the city of Indianapolis is the largest major US city not located on a navigable river.",
    img : "in"},
    "des moines" : {
    name : "Des Moines, Iowa",
    fact : 'Every four years, aspiring presidential candidates spend months campaigning in Iowa hoping to win the "first in the nation" Iowa Caucus. Sliced bread was invented by an Iowan from Davenport.',
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