//DOM element variables

var startButtonDOM = document.getElementById(start_button);
var blankLettersDOM = document.getElementById(letter_sports);
var wrongLettersArrayDOM = document.getElementById(wrong_letter_bank);
var remainingGuessesDOM = document.getElementById(remaining_guess_bank);
var winsDOM = document.getElementById(win_bank);
var lossesDOM = document.getElementById(loss_bank);

//create an array of words
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

//pick a random word from the words array
var word = seaLifeWords[Math.floor(Math.random() * seaLifeWords.length)];

//sets up the answerArray to show how many letters there are using _'s
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

//do...
//some way to push that to the dom element.

//create a variable to hold the number of remainingLetters to be guessed
var blankLetters = word.length;

//do..
//not really sure where the heck this would be lol.

//  ****************** THE MAIN GAME LOOP +++++++++++++++

//while there are letters left to be guessed
while (blankLetters > 0) {
  //show the player their progress
  alert(answerArray.join(" "));

  //do..
  //domElement.textContent = answerArray.join(" ");
  //or push????

  //get a guess from the player
  var guess = prompt(" Guess a letter, or click Cancle to stop playing.");

  //do...
  //just put that in the HTML/CSS place
  //then domElement.textConent = guess.join(" ");

  //if the guess is blank
  if (guess == null) {
    //exit the game loop
    break;
    //if the guess is more than one letter or no letters
  } else if (guess.length !== 1) {
    //alert them to guess a single letter only;
    alert("Please enter a single letter.");
    //valid guess
  } else {
    //update the game state with the guess
    for (var j = 0; j < word.length; j++) {
      //if the letter they guessed is in the word at that point or index
      if (word[j] === guess) {
        //update the answer array with the letter they guessed at that point or index
        answerArray[j] = guess;
        //substract one from remaining letters
        remainingLetters--;
      }
    }
  }
  // ************ END OF THE GAME LOOP ***********
}
//let player know the word
alert(answerArray.join(" "));

//do..
//domElement.textContent.

//do...
//start with only 8 possible guesses for player
//switch picture for each guess loss

//contrate the player
//only do it if remaining guesses is >0
//probably have if remaining guesses = some number then have a certain picture play
alert("Good Job! Good Effort! the answer was " + word);
//do...
//switching screen to whole scuba diver and then start game again with shark
//have a clapping sound
//if...
//remaining guesses = 0
//go to screen with only shark and "you loose"
//have some sort of "awwww" sound lol

//do...
//have a function to add to wins

//do...
//have a function to add to losses
