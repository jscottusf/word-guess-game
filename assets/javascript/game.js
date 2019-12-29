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
    fact : 'The name Topeka originates from a term meaning "a good place to dig potatoes." Kansas is the birthplace of Pizza Hut and home to both the longest grain elevator and the longest railroad bridge',
    img : "ks"},
    "frankfort" : {
    name : "Frankford, Kentucky",
    fact : "During the Civil War, Frankfort was the only Union capital occupied by Confederate troops. Kentucky today is most famous for bluegrass music and bourbon",
    img : "ky"},
    "baton rouge" : {
    name : "Baton Rouge, Louisiana",
    fact : "Home to Louisiana State University, Baton Rouge is located along the Mississippi river. The state of Louisiana has a strong Cajun/French influence giving it a unique culture within the American south.",
    img : "la"},
    "augusta" : {
    name : "Augusta, Maine",
    fact : "Established in 1736 and named after Princess Augusta from Whales, Augusta, Maine is the easternmost US state capital. Maine is famous for producing 90% of the US lobster supply and for the invention of the donut hole.",
    img : "me"},
    "annapolis" : {
    name : "Annapolis, Maryland",
    fact : "Annapolis became the nations capital after the revolutionary war and was the location for the first continental congressß to attempt to reform the articles of confederation.",
    img : "md"},
    "boston" : {
    name : "Boston, Massachusetts",
    fact : "Home of the Red Sox, Boston is famous for Fenway park and it's baked beans. The state of Massachusetts is known for being the landing place of the Mayflower and the Pilgrims.",
    img : "ma"},
    "lansing" : {
    name : "Lansing, Michigan",
    fact : "Located in central Michigian in between Detroit and Grand Rapids, Lansing is home to Michigan State University.",
    img : "mi"},
    "saint paul" : {
    name : "Saint Paul, Minnesota",
    fact : "Along with it's twin city Minneapolis, St. Paul makes up part of the third largest metro area in the midwest (after Chicago and Detroit). The region is home to the Minnesota Vikings and Twins, and Saint Paul has more city shoreline on the Mississippi River than any other city.",
    img : "mn"},
    "jackson" : {
    name : "Nicknamed the Crossroads of the South and named after US president Andrew Jackson, Jackson is the most populated city in the state of Mississippi.",
    fact : "fact",
    img : "ms"},
    "jefferson city" : {
    name : "Jefferson City, Missouri",
    fact : "Missouri's capital is named after US president Thomas Jefferson. Jefferson City is located in a region refered to as the Missouri Rhinland due it's history of German immigrants establishing vineyards.",
    img : "mo"},
    "helena" : {
    name : "Helena, Montana",
    fact : "Nicknamed Queen City of the Rockies, Helena is the state capital for Montana and is America's 5th-least populated state capital city. Four miners originally founded Helena as a gold camp which eventually turned the city into a boomtown.",
    img : "mt"},
    "lincoln" : {
    name : "Lincoln, Nebraska",
    fact : "Home of Warren Buffet. Nebraska is known as the bithplace of Kool-Aid and home to the largest indoor rainforest.",
    img : "ne"},
    "carson city": {
    name : "Carson City, Nevada",
    fact : "Carson City is known for it authentic wild west history. It is also located near the historic mining ghost town of Virginia City, and near Lake Tahoe and several major ski areas. Casino gambling is legal in Carson City, but honestly, when you think of Nevada you probably think of Las Vegas.",
    img : "nv"},
    "concord" : {
    name : "Concord, New Hampshire",
    fact : 'In the 19th century, the city was well known for carriage making, and the "Concord coaches" became world famous. New Hampshire was the first to declare its independence from Mother England -- a full six months before the Declaration of Independence was signed...hence the state motto, "live free or die."',
    img : "nh"},
    "trenton" : {
    name : "Trenton, New Jersey",
    fact : "Known as the site of George Washington's first victory over the Redcoats in the War of Independence. New Jersey is the most densely populated state in the US",
    img : "nj"},
    "santa fe" : {
    name : "Santa Fe, New Mexico",
    fact : "At 7,000 above sea level, Santa Fe is the United State's highest capital city and also the oldest (founded in 1608)",
    img : "nm"},
    "albany" : {
    name : "Albany, New York",
    fact : "Albany is the state's Capitol so it's known for politics in New York. But New York is more famous for New York City, which is the largest city in the United States. There is one birth in NYC every 4.4 minutes.",
    img : "ny"},
    "bismark" : {
    name : "Bismark, North Dakota",
    fact : "Bismarck is also known as a site on the Lewis and Clark National Historic Trail and as the home of the Dakota Zoo. 90% of North Dakota's land area is used as farms or ranches.",
    img : "nd"},
    "columbus" : {
    name : "Columbus, Ohio",
    fact : "Home of Ohio State University, Columbus is the most populated city in the state of Ohio. Cleveland is also pretty cool and you should check out their hastily made tourism video.",
    img : "oh"},
    "oklahoma city" : {
    name : "Oklahoma City (OKC), Oklahoma",
    fact : "Oklahoma is the only US state with a functioning oil well on the capital grounds.",
    img : "ok"},
    "salem" : {
    name : "Salem, Oregon",
    fact : "Salem, Oregon is located between Portland and Oregon in the Willamette Valley. If you ever happen to visit Oregon, be sure to try some VooDoo dunuts in Portland.",
    img : "or"},
    "harrisburg" : {
    name : "Harrisburg, Pennslyvania",
    fact : "Although Harrisburg is the capital of Pennslyvania, the nearby city of Hershey is considered the Chocolate Capital of the United States.",
    img : "pa"},
    "providence" : {
    name : "Providence, Rhode Island",
    fact : "At 1212 squre miles, Rhode Island is the smallest state by land mass in the USA",
    img : "ri"},
    "columbia" : {
    name : "Columbia, South Carolina",
    fact : "Home to the University of South Carolina, Columbia is the largest city in the state. South Carolina is known as T646he Palmetto State.",
    img : "sc"},
    "pierre" : {
    name : "Pierre, South Dakota",
    fact : "According to the 2010 census, Pierre, South Dakota has a population of 12,646 people, making it the second-least populous state capital in the United States",
    img : "sd"},
    "nashville" : {
    name : "Nashville, Tennessee",
    fact : "In addition to being the capital of Tennessee, Nashville is also known as the capital of country music. Elvis Presley record more than 200 songs at Nashville's history RCA Studio B.",
    img : "tn"},
    "austin" : {
    name : "Austin, Texas",
    fact : "Known as the live music capital of the world, Austin has been one of the fastest growing cities in Texas over the past ten years. And that says alot considering that Texas has been one of the fastest grow states in the US over the same period.",
    img : "tx"},
    "salt lake city" : {
    name : "Salt Lake City, Utah",
    fact : "Salt Lake City holds the title for the highest JELL-O consumption per capita, in the world. Jello is the Official State Snack of Utah.",
    img : "ut"},
    "montpelier" : {
    name : "Montpelier, Vermont",
    fact : "Less than 8,000 people live in Montelier, Vermont making it the least populous state capital in the United States. Montpelier is also the only state capital without a McDonalds. Bummer.",
    img : "vt"},
    "richmond" : {
    name : "Richmond, Virginia",
    fact : "Although Richmond was the capital of the Confederacy, it was not the first. Montgomery, Alabama held that title, but the heat and humidity was too much for the Confederates so they relocated the capital to Richmond despite it's close proximity to Washington DC.",
    img : "va"},
    "olympia" : {
    name : "Olympia, Washington",
    fact : "Located about sixty miles from Seattle, Olympia is a popular for travelers on their way to the ocean. Washington is one of the few states in the US without a state income tax.",
    img : "wa"},
    "charleston" : {
    name : "Charleston, West Virgina",
    fact : "Charleston is the most populated city in West Virgina. West Virgina only exists as a state because when Virgina seceded during the civil war, West Viginia separated to form it's own state to remain with the union. Due to it's mountainous terrain, WV was far less dependant on slavery compared to the rest of Virginia.",
    img : "wv"},
    "madison" : {
    name : "Madison, Wisconsin",
    fact : "Madison is home to the University of Wisconsin. Wisconsin is also known as America's Dairyland, hence the reason why Green Bay Packers fans wear cheese head hats.",
    img : "wi"},
    "cheyenne" : {
    name : "Cheyenne, Wyoming",
    fact : "Cheyenne, known as the Frontier City, is home to the worlds largest outdoor rodeo.",
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

    if (guessesLeft === 0) {
        resetScore();
    }
    else if ((wordBoard.indexOf("_") === -1)) {
        resetGame();
        setScore();
    }
    else if (alphabet.indexOf(lowerPlayerGuess) === -1) {
        alertMessage("Please choose a lower case letter from a - z")
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
        setWordBoard();
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

function setWordBoard() {
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