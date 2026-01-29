let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let compChoice = "Rock";
    let num = Math.floor((Math.random()*3))+1;

    if (num === 2) {
        compChoice = "Paper";
    }
    else if (num === 3) {
        compChoice = "Scissors";
    }
    return compChoice;
}


function playRound(humanChoice, computerChoice) {
    let choiceHuman = humanChoice.toLowerCase();
    let choiceComp = computerChoice.toLowerCase();

    if (choiceHuman === "rock" && choiceComp === "scissors") {
        resultsDiv.textContent = "You win! Rock beats Scissors.";
        humanScore++;
        scoreDiv.textContent = "You: " + humanScore + ", Computer: " + computerScore;
    }
    else if (choiceHuman === "rock" && choiceComp === "paper") {
        resultsDiv.textContent = "You lose! Paper beats Rock.";
        computerScore++;
        scoreDiv.textContent = "You: " + humanScore + ", Computer: " + computerScore;
    }
    else if (choiceHuman === "paper" && choiceComp === "rock") {
        resultsDiv.textContent = "You win! Paper beats Rock.";
        humanScore++;
        scoreDiv.textContent = "You: " + humanScore + ", Computer: " + computerScore;
    }
    else if (choiceHuman === "paper" && choiceComp === "scissors") {
        resultsDiv.textContent = "You lose! Scissors beats Paper.";
        computerScore++;
        scoreDiv.textContent = "You: " + humanScore + ", Computer: " + computerScore;
    }
    else if (choiceHuman === "scissors" && choiceComp === "rock") {
        resultsDiv.textContent = "You lose! Rock beats Scissors.";
        computerScore++;
        scoreDiv.textContent = "You: " + humanScore + ", Computer: " + computerScore;
    }
    else if (choiceHuman === "scissors" && choiceComp === "paper") {
        resultsDiv.textContent = "You win! Scissors beats Paper.";
        humanScore++;
        scoreDiv.textContent = "You: " + humanScore + ", Computer: " + computerScore;
    }
    else if (choiceHuman === choiceComp) {
        resultsDiv.textContent = "Tie!";
        scoreDiv.textContent = "You: " + humanScore + ", Computer: " + computerScore;
    }

    const winnerDiv = document.querySelector("#finalResult");
    if (humanScore >= 5) {
        winnerDiv.textContent = "Winner: You!";
        disableButtons()
    }
    else if (computerScore >= 5) {
        winnerDiv.textContent = "Winner: Computer!";
        disableButtons()
    }
}

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");

// while (humanScore < 5 && computerScore < 5) {
    const rock = document.querySelector("#rock");
    rock.addEventListener("click", () => {
        playRound("Rock", getComputerChoice());
    })

    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        playRound("Paper", getComputerChoice());
    })

    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        playRound("Scissors", getComputerChoice());
    })
//}

function disableButtons() {
    document.querySelector("#rock").disabled = true;
    document.querySelector("#paper").disabled = true;
    document.querySelector("#scissors").disabled = true;
}