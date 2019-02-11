//Beginning Slide Show

var i = 0; //start point
var time = 4000; //time between switch

//intro images array
var imageArray = [
  "assets/images/slide1.jpg",
  "assets/images/slide2.jpg",
  "assets/images/slide3.jpg",
  "assets/images/slide4.jpg",
  "assets/images/slide5.jpg",
  "assets/images/slide6.jpg",
  "assets/images/slide7.jpg",
  "assets/images/slide8.jpg",
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

//change image
function changeImg() {
  document.slide.src = imageArray[i];

  //check if index is under max

  if (i < 7 - 1) {
    //ad 1 to index
    i++;
  } else if ((gameOn = true && wrongGuessNumber == 0)) {
    i = 7;
  } else if ((gameOn = true && wrongGuessNumber == 1)) {
    i = 8;
  } else if ((gameOn = true && wrongGuessNumber == 2)) {
    i = 9;
  } else if ((gameOn = true && wrongGuessNumber == 3)) {
    i = 10;
  } else if ((gameOn = true && wrongGuessNumber == 4)) {
    i = 11;
  } else if ((gameOn = true && wrongGuessNumber == 5)) {
    i = 12;
  } else if ((gameOn = true && wrongGuessNumber == 6)) {
    i = 13;
  } else if ((gameOn = true && wrongGuessNumber == 7)) {
    i = 14;
  } else if ((gameOn = false && wrongGuessNumber >= 8)) {
    i = 15;
  } else if ((gameOn = false && wrongGuessNumber >= 9)) {
    i = 16;
  } else if (wins++) {
    i = 17;
  }

  //run function every x seconds
  setTimeout("changeImg()", time);
}

//run function when page loads
window.onload = changeImg;

//DOM element variables
var answerArrayDOM = document.getElementById("answer_array");
var wrongLetterArrayDOM = document.getElementById("wrong_letter_array");
var winsDOM = document.getElementById("win_bank");
var lossesDOM = document.getElementById("loss_bank");
var startButtonDOM = document.getElementById("start_button");

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
//declare game variables
var wins = 0;
var losses = 0;
var gameOn = false;
var word = "";
var answerArray = [];
var wrongLetterArray = [];
var wrongGuessNumber = 0;

function startGame() {
  gameOn = true;
  wrongLetterArray = [];
  answerArray = [];

  //pick a random word from the words array
  var word = seaLifeWords[Math.floor(Math.random() * seaLifeWords.length)];

  //sets up the answerArray to show how many letters there are using _'s
  var answerArray = [];
  for (var j = 0; j < word.length; j++) {
    answerArray[j] = "_";
  }

  //send underscores and spaces to the dom elemenet
  answerArrayDOM.textContent = answerArray.join(" ");
  wrongLetterArrayDOM.textContent = wrongLetterArray;
}

// letter guess function, takes in the letter you pressed and sees if it's in the selected word

function guess(letter) {
  //this part seems really weird lol. it's like a triple negative in english
  if (wrongLetterArray.includes(letter) === false) {
    wrongLetterArray.push(letter);

    for (var k = 0; k < word.length; k++) {
      if (word[k].toUppperCase() === letter.toUpperCase()) {
        answerArray[k] = word[k];
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
    wrongGuessNumber++;
  }
  checkLoss();
}
//checkLose
function checkLoss() {
  if (wrongGuessNumber >= 8) {
    losses++;
    gameRunning = false;
    lossesDOM.textContent = losses;
    answerArrayDOM.textContent = word;
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

document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    guess(event.key.toUpperCase);
  } else {
    alert("Press letters from A-Z!");
  }
};

//addeventlistener to begin game

startButtonDOM.addEventListener("click", startGame);
