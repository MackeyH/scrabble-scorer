// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/scrabble-scorer.html

// let greeting;
// let userWord;
let oldScrabbleScorer;

// Code your transform function here:


// Code your initialPrompt function here:

function greeting(){
  console.log("Let's play some Scrabble!");
}
greeting();
"\n"


// Code your runProgram function here:

const input = require('readline-sync');

function initialPrompt(prompt) {
  let userWord = input.question(prompt);
}
console.log(prompt(`Enter a word to score:`, `${userWord}`));


// my notes: create a loop that evaluates the letter of each word and converts it to points. have the loop go through an array

// oldScrabbleScorer = userWord;

function userWord() {
  for (let i = 0; i < userWord.length; i++) {
    console.log(userWord[i]);
}
  }


// Here is the oldPointStructure object:
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

// Use the transform function to create the newPointStructure object here:


// Create your scoringAlgorithms array here:


// Call the runProgram function here:
