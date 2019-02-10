//Beginning Slide Show

var i = 0; //start point
var images = []; //images array
var time = 3000; //time between switch

//image list
images[0] = "assets/images/slide1.jpg";
images[1] = "assets/images/slide2.jpg";
images[2] = "assets/images/slide3.jpg";
images[3] = "assets/images/slide4.jpg";
images[4] = "assets/images/slide5.jpg";
images[5] = "assets/images/slide6.jpg";
images[6] = "assets/images/slide7.jpg";
images[7] = "assets/images/slide8.jpg";
images[8] = "assets/images/slide9.jpg";

//change image
function changeImg() {
  document.slide.src = images[i];

  //check if index is under max

  if (i < images.length - 1) {
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
var wrongLettersArrayDOM = document.getElementById(wrong_letter_bank);
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
  "SHRIM",
  "SEADRAGON",
  "SQUID"
];
//declare game variables
var wins = 0;
var losses = 0;
var gameOn = false;
var word = "";
var answerArray = [];
var rightLetters = [];
var wrongLetters = [];
var letterSpots = [];

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
