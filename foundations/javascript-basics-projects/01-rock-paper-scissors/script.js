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
    return humanChoice.toLowerCase();
}

function playGame() {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.setAttribute("style", "background-color: white")
    // div.setAttribute("style", "border: 1px solid black; background-color: pink");

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            const draw = document.createElement("p");
            draw.setAttribute("style", "width: 200px; color: grey; font-weight: bold");
            draw.textContent = "It's a draw! Play Again";
            div.appendChild(draw);
            return;
        } else if ((humanChoice === "rock" && computerChoice == "scissors") ||
            (humanChoice === "scissors" && computerChoice == "paper") ||
            (humanChoice === "paper" && computerChoice == "rock")) {
            const humanWins = document.createElement("p");
            humanWins.setAttribute("style", "width: 200px; color: green; font-weight: bold");
            humanWins.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
            div.appendChild(humanWins);
            humanScore += 1;
        } else if ((computerChoice === "rock" && humanChoice == "scissors") ||
            (computerChoice === "scissors" && humanChoice == "paper") ||
            (computerChoice === "paper" && humanChoice == "rock")) {
            const computerWins = document.createElement("p");
            computerWins.setAttribute("style", "width: 200px; color: red; font-weight: bold");
            computerWins.textContent = `Computer won! ${computerChoice} beats ${humanChoice}.`;
            div.appendChild(computerWins);
            computerScore += 1;
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
        processChoice("rock");
        body.appendChild(div);
    });

    btn2.addEventListener("click", () => {
        processChoice("paper");
        body.appendChild(div);
    });

    btn3.addEventListener("click", () => {
        processChoice("scissors");
        body.appendChild(div);
    });
}




playGame();