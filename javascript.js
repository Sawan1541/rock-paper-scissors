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


function getHumanChoice() {
    let humChoice = prompt("Make your choice: ");
    return humChoice;
}

let humanScore = 0;
let computerScore = 0;
function playGame() {


    function playRound(humanChoice, computerChoice) {
        choiceHuman = humanChoice.toLowerCase();
        choiceComp = computerChoice.toLowerCase();

        if (choiceHuman === "rock" && choiceComp === "scissors") {
            resultsDiv.textContent = "You win! Rock beats Scissors.";
            humanScore++;
        }
        else if (choiceHuman === "rock" && choiceComp === "paper") {
            resultsDiv.textContent = "You lose! Paper beats Rock.";
            computerScore++;
        }
        else if (choiceHuman === "paper" && choiceComp === "rock") {
            resultsDiv.textContent = "You win! Paper beats Rock.";
            humanScore++;
        }
        else if (choiceHuman === "paper" && choiceComp === "scissors") {
            resultsDiv.textContent = "You lose! Scissors beats Paper.";
            computerScore++;
        }
        else if (choiceHuman === "scissors" && choiceComp === "rock") {
            resultsDiv.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
        }
        else if (choiceHuman === "scissors" && choiceComp === "paper") {
            resultsDiv.textContent = "You win! Scissors beats Paper.";
            humanScore++;
        }
    }

    // for (let i = 0; i < 5; i++) {
        // humanSelection = getHumanChoice();
        // computerSelection = getComputerChoice();
        // playRound(humanSelection, computerSelection);
    // }
}

// event listener for buttons
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    playRound();
})

const resultsDiv = document.querySelector("#results");


playGame();
console.log("Your score: " + humanScore);
console.log("Computer's score: " + computerScore);