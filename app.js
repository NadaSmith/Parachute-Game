//an array that store the letters guessed by players
let guessedLetters;
//a count of the number of incorrect guesses made by the players
let incorrectGuesses;
//represents the number of parachute strings remaining before the parachute breakes
let reamining ParachuteStrings;

//array presenting different question word pairs that consists of questions and their associated secret word answers 
const questionWordPairs = [
  {question: "Question 1", word: "secretword1"},
  {question: "Question 2", word: "secretword2"},
  {question: "Question 3", word: "secretword3"},
  {question: "Question 4", word: "secretword4"},
  {question: "Question 5", word: "secretword5"},
  {question: "Question 6", word: "secretword6"},
  {question: "Question 7", word: "secretword7"},
  {question: "Question 8", word: "secretword8"},
  {question: "Question 9", word: "secretword9"},
  {question: "Question 10", word: "secretword10"}
]

//randomly selecting question-answer pair from questionWordPairs array and intialize the game variables
selectRandomQuestion()

//populating the display with game elements
updateDisplay()

//function to return the secret word with hidden letters
getSecretWordWithPlaceholders()

//handle player turns
handleTurn()

//check if the game has ended
isGameOver()

//event listeners for players input

//displays game over message and outcome
displayGameOver()

//start game


