function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    switch(randomNumber) {
        case 0:
            return('rock');
        case 1:
            return('paper');
        default:
            return('scissors');
    }
}

function getHumanChoice() {
    let humanChoice
    while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        humanChoice = prompt("Please choose either rock, paper or scissors.","rock");
    }
    return(humanChoice);
    console.log(humanChoice);
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    } else if (humanChoice == 'rock') {
        if (computerChoice == 'paper') {
            computerScore++;
        } else {
            humanScore++;
        }
    } else if (humanChoice == 'paper') {
        if (computerChoice == 'scissors') {
            computerScore++;
        } else {
            humanScore++;
        }
    } else {
        if (computerChoice == 'rock') {
            computerScore++;
        } else {
            humanScore++;
        }
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log('Human wins!');
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log('Computer wins!');
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    } else {
        console.log('Error: Neither side won.');
        console.log(`Human score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
}