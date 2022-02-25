let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
};

function compareGuesses(humanNum, compNumber, guessedNumber) {

    let computerGuess = Math.abs(guessedNumber.compNumber);
    let humanGuess = Math.abs(guessedNumber.humanNum);

    if (humanNum > 9 || humanNum < 0) {
        return 'Please enter the number between 0 and 10';
    }
    if (humanGuess <= computerGuess) {
        return true;
    } else {
        return false;
    }
}

function updateScore(winner) {
    if (winner === 'human')
        humanScore++;
    else if (winner === 'computer')
        computerScore++;
}

function advanceRound() {
    currentRoundNumber++;
}

updateScore('human');
console.log(humanScore);
updateScore('computer');
console.log(computerScore);