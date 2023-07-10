// Define game variables that will store the corresponding information
let currentQuestion;
let secretWord;
let guessedLetters;
let incorrectGuesses;
let player1Score;
let player2Score;
let currentPlayer;
let totalTurns;
const maxRounds = 10;

// Array with game data consisting of questions and answer pairs
const questionWordPairs = [
  { question: "Inside which HTML element do we put JavaScript code?", word: "script" },
  { question: "Which of the following methods is used to access HTML ID elements using JavaScript?", word: "getelementbyid" },
  { question: "When an operator's value is NULL, the typeof returned by the unary operator is?", word: "undefined" },
  { question: "What function is used to serialize an object into a JSON string in JavaScript?", word: "stringify" },
  { question: "How to stop an interval timer in JavaScript?", word: "clearinterval" },
  { question: "Which company developed JavaScript?", word: "netscape" },
  { question: "What allows the user to enter input by providing a text box?", word: "prompt" },
  { question: "What is used to represent no value or no object?", word: "null" },
  { question: "What is the output for a variable that is not assigned to any value?", word: "undefined" },
  { question: "What is the data type of variables?", word: "object" }
];

// Initialize game variables and start the game
const startGame = () => {
  player1Score = 0;
  player2Score = 0;
  totalTurns = 0;
  currentPlayer = 1;
  alphabetButtonListeners();
  nextRound();
};

// Select a random question-answer pair from the questionWordPairs array and initialize the game variables
const selectRandomQuestion = () => {
  const randomIndex = Math.floor(Math.random() * questionWordPairs.length);
  currentQuestion = questionWordPairs[randomIndex].question;
  secretWord = questionWordPairs[randomIndex].word;
  guessedLetters = [];
  incorrectGuesses = 0;
};

// Return the secret word with hidden letters
const getSecretWordWithPlaceholders = () => {
  let wordWithPlaceholders = "";
  for (let letter of secretWord) {
    if (guessedLetters.includes(letter)) {
      wordWithPlaceholders += letter;
    } else {
      wordWithPlaceholders += "_";
    }
    wordWithPlaceholders += " ";
  }
  return wordWithPlaceholders.trim();
};

// Update the display with game elements
const updateDisplay = () => {
  document.getElementById("question").textContent = currentQuestion;
  document.getElementById("secret-word").textContent = getSecretWordWithPlaceholders();
  document.getElementById("player1-score").textContent = player1Score.toString();
  document.getElementById("player2-score").textContent = player2Score.toString();
  document.getElementById("turn-count").textContent = totalTurns.toString();
  document.getElementById("current-player").textContent = `Player ${currentPlayer}`;
};

// Handle player turns
const handlePlayerTurn = (letter) => {
    const guessedLetter = letter.trim().toLowerCase();
    if (guessedLetter.length === 1 && guessedLetters.indexOf(guessedLetter) === -1) {
      guessedLetters.push(guessedLetter);
      if (!secretWord.includes(guessedLetter)) {
        incorrectGuesses++;
        const incorrectGuessesElements = document.querySelectorAll("#incorrect-guesses > div");
        incorrectGuessesElements[incorrectGuesses - 1].classList.add("lit");
      }
      updateDisplay();
      updateParachuteImage();
    }
  
    if (isPlayerTurnOver()) {
      if (isGameOver()) {
        setTimeout(displayGameOver, 2000);
      } else {
        if (currentPlayer === 2) {
          totalTurns++; // Increment turn count after each player's turn
        }
        switchTurns(); // Switch turns between players
        nextRound();
      }
    }
  
    const alphabetButton = document.querySelector(`#alphabet button[data-letter="${guessedLetter}"]`);
    alphabetButton.disabled = true; // Disable button after submission
};


// Check if the player's turn is over
const isPlayerTurnOver = () => {
    const guessedWord = getSecretWordWithPlaceholders().split(" ").join("");
    const isCorrectGuess = guessedWord === secretWord;
    
    if (isCorrectGuess) {
      if (currentPlayer === 1) {
        player1Score += 1;
      } else {
        player2Score += 1;
      }
    }
  
    if (incorrectGuesses === 5 || isCorrectGuess) {
      return true;
    } else {
      return false;
    }
};

// Function to switch players
const switchPlayers = () => {
    currentPlayer = currentPlayer === 1 ? 2 : 1;
};

// Check if the game has ended
const isGameOver = () => {
  return totalTurns === maxRounds;
};

// Function to start the next round of the game
// Function to start the next round of the game
const nextRound = () => {
    selectRandomQuestion();
    updateDisplay();
    totalTurns++;
    resetAlphabetButtons(); // Reset alphabet buttons for the new round
    resetIncorrectGuesses(); // Reset incorrect guess divs
    updateParachuteImage(); // Update parachute image based on incorrect guesses
  
    // Display the current player
    document.getElementById("current-player").textContent = `Player ${currentPlayer}`;
};

// Reset the incorrect guesses
const resetIncorrectGuesses = () => {
    const incorrectGuessesElements = document.querySelectorAll("#incorrect-guesses > div");
    incorrectGuessesElements.forEach(element => {
      element.classList.remove("lit");
    });
};

// Update the parachute image and check game over condition after a player's turn
const updateParachuteImage = () => {
    const parachuteImage = document.getElementById("parachute-image");
    parachuteImage.src = `images/parachute-${incorrectGuesses}.png`;
  
    const incorrectGuessesElements = document.querySelectorAll("#incorrect-guesses > div");
    incorrectGuessesElements.forEach((element, index) => {
        if (index < incorrectGuesses) {
            element.classList.add("lit");
        } else {
            element.classList.remove("lit");
        }
    });

    if (isPlayerTurnOver()) {
        setTimeout(() => {
            if (getSecretWordWithPlaceholders() === secretWord) {
                currentPlayer === 1 ? player1Score++ : player2Score++;
            }

            if (isGameOver()) {
                setTimeout(displayGameOver, 2000);
            } else {
                setTimeout(() => {
                    currentPlayer = currentPlayer === 1 ? 2 : 1;
                    nextRound();
                }, 2000);
            }
        }, 2000);
    }
};

// Function to reset the alphabet buttons
const resetAlphabetButtons = () => {
    const alphabetButtons = document.querySelectorAll("#alphabet button");
    alphabetButtons.forEach(button => {
      button.disabled = false; // Re-enable the button
    });
    guessedLetters = []; // Reset guessed letters for the new round
    incorrectGuesses = 0; // Reset incorrect guesses for the new round
    const incorrectGuessesElements = document.querySelectorAll("#incorrect-guesses > div");
    incorrectGuessesElements.forEach(element => {
      element.classList.remove("lit");
    });
};

// Function to enable the alphabet buttons
const enableAlphabetButtons = () => {
    const alphabetButtons = document.querySelectorAll("#alphabet button");
    alphabetButtons.forEach(button => {
      button.disabled = false; // Re-enable the button
    });
};

// Function to reset the game and start a new game
const resetAndRestartGame = () => {
  resetGame();
  startGame();
};

// Function to display the game over message and update scores
const displayGameOver = () => {
  const gameContainer = document.getElementById("container");
  gameContainer.classList.add("dim");

  const outcomeMessage = document.getElementById("outcome-message");
  const nextPlayerButton = document.getElementById("next-player");
  const gameOverDiv = document.getElementById("game-over");

  if (player1Score > player2Score) {
    outcomeMessage.textContent = "Player 1 wins the game!";
  } else if (player1Score < player2Score) {
    outcomeMessage.textContent = "Player 2 wins the game!";
  } else {
    outcomeMessage.textContent = "It's a tie!";
  }

  gameOverDiv.style.display = "block";
  gameOverDiv.classList.remove("dim");

  // Remove existing event listener for the "Play Again" button
  nextPlayerButton.removeEventListener("click", resetAndRestartGame);

  // Add new event listener for the "Play Again" button
  nextPlayerButton.addEventListener("click", resetAndRestartGame);
};

// Reset the game and start a new round
const resetGame = () => {
    player1Score = 0;
    player2Score = 0;
    totalTurns = 0;
    currentPlayer = 1;
    guessedLetters = [];
    incorrectGuesses = 0;
    updateDisplay();
  
    resetAlphabetButtons(); // Reset alphabet buttons
    resetIncorrectGuesses(); // Reset incorrect guess divs
  
    // Remove event listeners from alphabet buttons
    const alphabetButtons = document.querySelectorAll("#alphabet button");
    alphabetButtons.forEach(button => {
      button.removeEventListener("click", handlePlayerTurn);
    });
  
    // Reattach event listeners to alphabet buttons
    alphabetButtonListeners();
};

// Assign event listeners to alphabet buttons
const alphabetButtonListeners = () => {
    const alphabetButtons = document.querySelectorAll("#alphabet button");
  
    alphabetButtons.forEach(button => {
      const letter = button.textContent;
      button.addEventListener("click", () => {
        handlePlayerTurn(letter);
        button.disabled = true; // Disable button after submission
      });
    });
  };

// Start the game
startGame();
