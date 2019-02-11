//Beginning Slide Show

var i = 0; //start point

//intro images array
var imageArray = [
  "assets/images/slide9.jpg",
  "assets/images/slide10.jpg",
  "assets/images/slide11.jpg",
  "assets/images/slide12.jpg",
  "assets/images/slide13.jpg",
  "assets/images/slide14.jpg",
  "assets/images/slide15.jpg",
  "assets/images/slide16.jpg",
  "assets/images/slide17.jpg",
  "assets/images/slide18.jpg"
];

//had to take out these intro images because they messed my game up too much
//"assets/images/slide1.jpg",
//"assets/images/slide2.jpg",
//"assets/images/slide3.jpg",
//"assets/images/slide4.jpg",
//"assets/images/slide5.jpg",
//"assets/images/slide6.jpg",
//"assets/images/slide7.jpg",
//"assets/images/slide8.jpg",

//change image
function changeImg() {
  document.slide.src = imageArray[i];

  //check if index is under max

  //took out the intro from array since it seemed to mess with everything. **sigh**
  //if (i < 7 - 1) {
  //ad 1 to index
  //i++;
  //} else

  //my images are not changining even with this :-( very very sad

  if (wrongGuessNumber == 8) {
    i = 0;
  } else if (wrongGuessNumber == 7) {
    i = 1;
  } else if (wrongGuessNumber == 6) {
    i = 2;
  } else if (wrongGuessNumber == 5) {
    i = 3;
  } else if (wrongGuessNumber == 4) {
    i = 4;
  } else if (wrongGuessNumber == 3) {
    i = 5;
  } else if (wrongGuessNumber == 2) {
    i = 6;
  } else if (wrongGuessNumber == 1) {
    i = 7;
  } else if (wrongGuessNumber <= 0) {
    i = 8;
  } else if (wins++) {
    i = 9;
  }

  // taking out intro to run function every x seconds seems broken
  //setTimeout("changeImg()", time);
}

//run function when page loads
window.onload = changeImg;

//DOM element variables
var answerArrayDOM = document.getElementById("answer_array");
var wrongLetterArrayDOM = document.getElementById("wrong_letter_array");
var winsDOM = document.getElementById("win_bank");
var lossesDOM = document.getElementById("loss_bank");
var startButtonDOM = document.getElementById("start_button");
var wrongGuessNumberDOM = document.getElementById("remaining_guesses");

//declare game variables
var wins = 0;
var losses = 0;
var gameOn = false;
var word = "";
var answerArray = [];
var wrongLetterArray = [];
var guessedLetterArray = [];
var wrongGuessNumber = 9;

//create an array of words
var seaLifeWords = [
  "OCTOPUS",
  "CORAL",
  "MANATEE",
  "STARFISH",
  "ORCA",
  "WHALE",
  "TORTOISE",
  "SEAHORSE",
  "MERMAID",
  "SEAL",
  "JELLYFISH",
  "STINGRAY",
  "DOLPHIN",
  "WALRUS",
  "PORPOISE",
  "PENGUIN",
  "AXOLOTL",
  "LOBSTER",
  "AQUAMAN",
  "SHRIMP",
  "SEADRAGON",
  "SQUID"
];

//variables restaring for new game and getting a word
function startGame() {
  gameOn = true;
  wrongLetterArray = [];
  answerArray = [];
  guessedLetterArray = [];
  wrongGuessNumber = 9;
  //pick a random word from the words array
  word = seaLifeWords[Math.floor(Math.random() * seaLifeWords.length)];

  //sets up the answerArray to show how many letters there are using _'s

  for (var j = 0; j < word.length; j++) {
    //push underscores for missing word
    answerArray.push("_");
  }

  //pushing elements to the DOM
  answerArrayDOM.textContent = answerArray.join(" ");
  wrongLetterArrayDOM.textContent = wrongLetterArray;
}

// letter guess function, takes in the letter you pressed and sees if it's in the selected word

//checking the guessed letter inside of the word
function guess(letter) {
  //this part seems really weird lol. it's like a triple negative in english

  if (!guessedLetterArray.includes(letter)) {
    guessedLetterArray.push(letter);

    for (var j = 0; j < word.length; j++) {
      if (word.charAt(j).toUpperCase() === letter.toUpperCase()) {
        answerArray[j] = word.charAt(j);
      }
    }
    answerArrayDOM.textContent = answerArray.join(" ");

    checkIncorrect(letter);
  } else {
    alert("Letter already guessed, pick, another letter");
  }
}

function checkIncorrect(letter) {
  if (answerArray.includes(letter) === false) {
    wrongLetterArray.push(letter);
    wrongLetterArrayDOM.textContent = wrongLetterArray.join(" ");
    wrongGuessNumber--;
    wrongGuessNumberDOM.textContent = wrongGuessNumber;
  }
  checkLoss();
}
//checkLose
function checkLoss() {
  if (wrongGuessNumber <= 0) {
    losses++;
    gameRunning = false;
    lossesDOM.textContent = losses;
    startGame();
  }
  checkWin();
}

//checkWin

function checkWin() {
  if (word.toUpperCase() === answerArray.join("").toUpperCase()) {
    wins++;
    gameRunning = false;
    winsDOM.textContent = wins;
  }
}

//add onkeyupevent to trigger letterGuess
// Wait for key press

document.onkeyup = function(event) {
  // check to see if letter pressed is a-z
  console.log("IN KEY UP");
  console.log("keycode", event.keyCode);
  if (event.keyCode >= 65 && event.keyCode <= 90 && gameOn === true) {
    // run game logic
    guess(event.key);
  } else {
    alert("Press something that's a-z or start a new game!");
  }
};
//addeventlistener to begin game

startButtonDOM.addEventListener("click", startGame);
console.log(startGame);
