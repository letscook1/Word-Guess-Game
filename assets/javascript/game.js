//Beginning Slide Show

var i = 0; //start point
var time = 4000; //time between switch

//images array
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

  if (i < imageArray.length - 1) {
    //ad 1 to index
    i++;
  }
  //run function every x seconds
  setTimeout("changeImg()", time);
}

//run function when page loads
window.onload = changeImg;

//DOM element variables
var answerArrayDOM = document.getElementById(answer_array);
var wrongLetterArrayDOM = document.getElementById(wrong_letter_bank);
var winsDOM = document.getElementById(win_bank);
var lossesDOM = document.getElementById(loss_bank);

//create an array of words
var seaLifeWords = [
  "OCTOPUS",
  "CCRAL",
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

if ((i = 8)) {
  function startGame() {
    gameOn = true;
    rightLetters = [];
    wrongLetters = [];
    pickedWordPlaceHolderArr = [];
    //create a variable to hold the number of remainingLetters to be guessed
    letterSpots = word.length;

    //pick a random word from the words array
    var word = seaLifeWords[Math.floor(Math.random() * seaLifeWords.length)];

    //sets up the answerArray to show how many letters there are using _'s
    var answerArray = [];
    for (var j = 0; j < word.length; j++) {
      answerArray[j] = "_";
    }

    //send underscores and spaces to the dom elemenet
    answerArrayDOM.textContent = answerArray;
    wrongLettersArrayDOM.textContent = wrongLetters;
  }
}

function wrongLetter(letter) {
  if (answerArray.includes(letter) === false) {
    wrongLetterArray.push(letter);
    wrongLetterArrayDOM.textContent = wrongLetter.join(" ");
  }
  checkLoss();
}
