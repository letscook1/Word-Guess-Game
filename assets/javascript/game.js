//grab reference to my dom elements
var domStartButton = document.getElementById(start_button);
var domLetterSpots = document.getElementById(letter_spots);
var domGuesses = document.getElementById(guesses);
var domGuessesLeft = document.getElementById(guesses_left);
var domWins = document.getElementById(wins);
var domLosses = document.getElementById(losses);
//create variables for game (wordBank, wins, losses, picked word, guesses left, game running, picked word placeholder, guessed letter bank, incorrect letter bank)
var seaLifeWords = [
  "Octopus",
  "Coral Reef",
  "Manatee",
  "Starfish",
  "Killer Whale",
  "Beluga Whale",
  "Humpback Whale",
  "Galapagos Tortoise",
  "Seahorse",
  "Mermaid",
  "California Seal",
  "Clown Fish",
  "JellyFish",
  "Stingray",
  "Dolphin",
  "Sea Otter",
  "Sea Lion",
  "Walrus",
  "Penguin",
  "Axolotl",
  "Lobster",
  "Electric Eel",
  "Aqua Man"
];
var wins = 0;
var losses = 0;
var gussesLeft = 0;
var gameRunning = false;
var pickedWord = "";
var pickedWordPlaceHolderArr = [];
var guessedLetters = [];
var wrongLetters = [];

//newGame function to reset all stats, pick new word and create placeholders

function newGame() {
  gameRunning = true;
  guessesLeft = 8;
  guessedLetters = [];
  wrongLetters = [];
  pickedWordPlaceHolderArr = [];

  pickedWord = seaLifeWords[Math.floor(Math.random() * seaLifeWords.length)];
  console.log(pickedWord);

  for (var i = 0; i < pickedWord.length; i++) {
    if (pickedWord[i] === " ") {
      pickedWordPlaceHolderArr.push(" ");
    } else {
      pickedWordPlaceHolderArr.push("_");
    }
  }

  console.log(pickedWordPlaceHolderArr);

  domGuessesLeft.textContent = guessesLeft;
  domLetterSpots.textContent = pickedWordPlaceHolderArr.join("");
  domGuesses.textContet = wrongLetters;
}

// letter guess function, takes in the letter you pressed and sees if it's in the selected word

function letterGuess(letter) {
  console.log(letter);

  if (guessedLetters.includes(letter) === false) {
    guessedLetters.push(letter);

    for (var i = 0; i < pickedWord.length; i++) {
      if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
        pickedWordPlaceHolderArr[i] = pickedWord[i];
      }
    }
    domLetterSpots.textContent = pickedWordPlaceHolderArr.join("");

    checkIncorrect(letter);
  } else {
    alert("Letter already guessed, pick, another letter");
  }
}

// checkIncorrect(letter)

function checkIncorrect(letter) {
  if (pickedWordPlaceHolderArr.includes(letter) === false) {
    guessesLeft--;
    guesses.push(letter);
    domGuesses.textContent = guesses.join(" ");
    domGuessesLeft.textContent = guessesLeft;
  }
  checkLoss();
}

//checkLose
function checkLoss() {
  if (guessesLeft <= 0) {
    losses++;
    gameRunning = false;
    domLosses.textContent = losses;
  }
  checkWin();
}

//checkWin

function checkWin() {
  if (
    pickedWord.toLowerCase() ===
    pickedWordPlaceholderArray.join("").toLowerCase()
  ) {
    wins++;
    gameRunning = false;
    domWins.textContent = wins;
  }
}

//add event listener for new game butto

//add onkeyupevent to trigger letterGuess

document.onkeyup = function(event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    letterGuess(event.key);
  } else {
    alert("Press letters a-z!");
  }
};

domStartButton.addEventListener("click", newGame);
