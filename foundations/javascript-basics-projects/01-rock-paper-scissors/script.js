let humanScore = 0;
let computerScore = 0;
let gameState = true;
const humanScoreTracker = document.querySelector("#human-score");
const computerScoreTracker = document.querySelector("#computer-score");
const body = document.querySelector("body");

const div = document.createElement("div");
div.setAttribute("style", "background-color: white");


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
    return humanChoice.toLowerCase();
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (gameState === true && humanChoice === computerChoice) {
            const draw = document.createElement("p");
            draw.setAttribute("style", "width: 200px; color: grey; font-weight: bold");
            draw.textContent = "It's a draw! Play Again";
            div.appendChild(draw);
            return;

        } else if (gameState === true && (humanChoice === "rock" && computerChoice == "scissors") ||
            (humanChoice === "scissors" && computerChoice == "paper") ||
            (humanChoice === "paper" && computerChoice == "rock")) {
            const humanWins = document.createElement("p");
            humanWins.setAttribute("style", "width: 200px; color: green; font-weight: bold");
            humanWins.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
            div.appendChild(humanWins);
            humanScore += 1;
            humanScoreTracker.textContent = `${humanScore}`;
            displayResults();

        } else if (gameState === true && (computerChoice === "rock" && humanChoice == "scissors") ||
            (computerChoice === "scissors" && humanChoice == "paper") ||
            (computerChoice === "paper" && humanChoice == "rock")) {
            const computerWins = document.createElement("p");
            computerWins.setAttribute("style", "width: 200px; color: red; font-weight: bold");
            computerWins.textContent = `Computer won! ${computerChoice} beats ${humanChoice}.`;
            div.appendChild(computerWins);
            computerScore += 1;
            computerScoreTracker.textContent = `${computerScore}`;
            displayResults();

        } else {
            const invalidChoice = document.createElement("p");
            invalidChoice.textContent = "Invalid choice! Try again";
            div.appendChild(invalidChoice);
        }
    }

    function processChoice(choice) {
        const humanSelection = getHumanChoice(choice);
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");

    btn1.addEventListener("click", () => {
        if (gameState == true) {
            processChoice("rock");
            body.appendChild(div);
        } else {
            return;
        }
    });

    btn2.addEventListener("click", () => {
        if (gameState == true) {
            processChoice("paper");
            body.appendChild(div);
        } else {
            return;
        }

    });

    btn3.addEventListener("click", () => {
        if (gameState == true) {
            processChoice("scissors");
            body.appendChild(div);
        } else {
            return;
        }
    });
}






function displayResults() {
    const results = document.querySelector("#results");
    const playAgain = document.createElement("button");
    playAgain.textContent = "Play Again";

    if (humanScore === 5) {
        gameState = false;
        results.setAttribute("style", "display: block; background-color: grey; color: green");
        const p1 = document.createElement("p");
        p1.textContent = "Congratulations! You won!";
        results.appendChild(p1);

        const p2 = document.createElement("p");
        p2.textContent = `Your Score: ${humanScore}`;
        results.appendChild(p2);

        const p3 = document.createElement("p");
        p3.textContent = `Computer Score: ${computerScore}`;
        results.appendChild(p3);

        results.appendChild(playAgain);
        playAgain.addEventListener("click", () => {
            results.style.display = "none";
            while (results.firstChild) {
                results.removeChild(results.firstChild);
            }
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            humanScore = 0;
            computerScore = 0;
            humanScoreTracker.textContent = `${humanScore}`;
            computerScoreTracker.textContent = `${computerScore}`;
            gameState = true;
        });
    } else if (computerScore == 5) {
        gameState = false;
        results.setAttribute("style", "display: block; background-color: grey; color: green");
        const p1 = document.createElement("p");
        p1.textContent = "Computer won! You lose!";
        results.appendChild(p1);

        const p2 = document.createElement("p");
        p2.textContent = `Your Score: ${humanScore}`;
        results.appendChild(p2);

        const p3 = document.createElement("p");
        p3.textContent = `Computer Score: ${computerScore}`;
        results.appendChild(p3);

        results.appendChild(playAgain);
        playAgain.addEventListener("click", () => {
            results.style.display = "none";
            while (results.firstChild) {
                results.removeChild(results.firstChild);
            }
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            humanScore = 0;
            computerScore = 0;
            humanScoreTracker.textContent = `${humanScore}`;
            computerScoreTracker.textContent = `${computerScore}`;
            gameState = true;
        });
    }
}

playGame();