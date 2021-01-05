// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);
        // Validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        return;
    }
    // Check if win
    if (guess === winningNum) {
        // Game over - won
        gameOver(true, `Great guess! ${winningNum} is the winning number!`)
    } else {
    // Wrong number
        guessesLeft -= 1;
    if (guessesLeft === 0) {
        // Game Over - lost
        gameOver(false, `Sorry, you lost the game. No guesses left! The correct number was ${winningNum}!`);
    } else {
        // Change border color
        guessInput.style.borderColor = 'red';

        // Continue playing
        setMessage(`${guess} is not correct! ${guessesLeft} guesses left!`, 'red')

        // Clear input
        guessInput.value = '';
    }
    }
});

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : 'red';
    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color
    // Set winning msg
    setMessage(msg, color);


    // Play Again?
    guessBtn.value = 'Play Again?';
    guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}