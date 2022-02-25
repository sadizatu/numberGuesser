let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const humanDifference = Math.abs(secretTarget - humanGuess);
    const computerDifference = Math.abs(secretTarget - computerGuess)
    return humanDifference <= computerDiference;
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;


updateScore('human');
console.log(humanScore);
updateScore('computer');
console.log(computerScore);