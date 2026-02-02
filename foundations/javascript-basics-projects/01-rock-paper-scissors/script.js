let humanScore = 0;
let computerScore = 0;

function getComputerChoice(rock, paper, scissors, min, max) {
    rock = "rock";
    paper = "paper";
    scissors = "scissors";
    min = 1;
    max = 3;

    let computerChoice = Math.floor(Math.random() * (max - min + 1) + min);

    if (computerChoice === 1) {
        return rock;
    } else if (computerChoice === 2) {
        return paper;
    } else if (computerChoice === 3) {
        return scissors;
    } else {
        return "Computer didn't make a choice";
    }
}

function getHumanChoice(humanChoice) {
    humanChoice = prompt("Enter your choice", '');
    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a draw! Play again");
            return;
        } else if ((humanChoice === "rock" && computerChoice == "scissors") ||
            (humanChoice === "scissors" && computerChoice == "paper") ||
            (humanChoice === "paper" && computerChoice == "rock")) {
            console.log(`You won! ${humanChoice} beats ${computerChoice}.`);
            humanScore += 1;
        } else if ((computerChoice === "rock" && humanChoice == "scissors") ||
            (computerChoice === "scissors" && humanChoice == "paper") ||
            (computerChoice === "paper" && humanChoice == "rock")) {
            console.log("Computer wins! Rock beats Scissors.");
            computerScore += 1;
        } else {
            console.log("Invalid choice! Try again");
        }
    }

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Your Score: ${humanScore}
        Computer Score: ${computerScore}`);
    }
}

playGame();