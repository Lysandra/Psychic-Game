// Winning Letters
var winningLetters = ["a", "b", "c"];

// Variable to hold one of the randomly selected winning letters
var letterToGuess = null;

// Variable to hold the letters guessed
var guessesSoFar = [];

// Variable to hold guesses left;
var guessesLeft = 9;

// Counters for wins and losses
var wins = 0;
var losses = 0;

// Function to update guesses left by grabbing the HTML element to write to the DOM to display the guesses left
var updateGuessesLeft = function () {
    document.querySelector("#guesses-left").innerHTML = guessesLeft;
};

// Function to update users guesses by grabbing the HTML element to write to the DOM to display the letters guessed so far
var updateGuessesSoFar = function () {
    document.querySelector("#guesses-so-far").innerHTML = guessesSoFar.join(", ");
};

// Function to update the random letter to win
var updateLetterToGuess = function () {
    letterToGuess = winningLetters[Math.floor(Math.random() * winningLetters.length)];
};

// Function to reset the game
var reset = function () {
    guessesLeft = 9;
    guessesSoFar = [];
    updateGuessesLeft();
    updateGuessesSoFar();
    updateLetterToGuess();
};

// Execute on page load
updateGuessesLeft();
updateLetterToGuess();

// Function to capture keyboard click
document.onkeydown = function(event) {
    
    // Subtract from guesses left by one
    guessesLeft--;

    // Lowercase the letter
    var letter = String.fromCharCode(event.which).toLowerCase();

    // Push the letter to the guessesSoFar Array
    guessesSoFar.push(letter);

    // Run the update functions to update guessesLeft and guessesSoFar to write to the DOM
    updateGuessesSoFar();
    updateGuessesLeft();

    // Check if there is a match to the winning letters 
    if (letter === letterToGuess) {
        // Increase wins by one
        wins++;
        
        // Grab the HTML element to write to the DOM to display the number of wins
        document.querySelector("#wins").innerHTML = wins;        

        // Reset the game
        reset();
    };

    // Check if guesses left is zero
    if (guessesLeft === 0) {
        // Increase losses by one
        losses++;

        // Grab the HTML element to write to the DOM to display the number of losses
        document.querySelector("#losses").innerHTML = losses;

        // Reset the game
        reset();
    };
};