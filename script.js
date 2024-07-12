function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    switch(randomNumber) {
        case 0:
            console.log('rock');
            return 'rock';
        case 1:
            console.log('paper');
            return 'paper';
        default:
            console.log('scissors');
            return 'scissors';
    }
}

const bRock = document.getElementById("rock");
const bPaper = document.getElementById("paper");
const bScissors = document.getElementById("scissors");

const pChoice = document.getElementById("player-choice");
const cChoice = document.getElementById("computer-choice");

const pScore = document.getElementById("player-score");
const cScore = document.getElementById("computer-score");

const endResult = document.getElementById("end-result");

let humanScore = 0;
let computerScore = 0;

pScore.innerHTML = `Your Points: ${humanScore}`;
cScore.innerHTML = `NPC Points: ${computerScore}`;

bRock.addEventListener("click", () => playRound('rock', getComputerChoice()));
bPaper.addEventListener("click", () => playRound('paper', getComputerChoice()));
bScissors.addEventListener("click", () => playRound('scissors', getComputerChoice()));

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        endResult.innerHTML = "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        endResult.innerHTML = "You win this round!";
    } else {
        computerScore++;
        endResult.innerHTML = "NPC wins this round!";
    }

    pChoice.innerHTML = `You Chose: ${humanChoice}`;
    cChoice.innerHTML = `NPC Chose: ${computerChoice}`;

    pScore.innerHTML = `Your Points: ${humanScore}`;
    cScore.innerHTML = `NPC Points: ${computerScore}`;

    playGame();
}

function playGame() {
    if (humanScore + computerScore === 5) {
        if (humanScore > computerScore) {
            endResult.innerHTML = "You win the game!";
            console.log('Human wins!');
            console.log(`Human score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
        } else {
            endResult.innerHTML = "NPC wins the game!";
            console.log('Computer wins!');
            console.log(`Human score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
        }

        bRock.remove();
        bPaper.remove();
        bScissors.remove();
    }
}
