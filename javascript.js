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
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
        else if (choiceHuman === "rock" && choiceComp === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else if (choiceHuman === "paper" && choiceComp === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if (choiceHuman === "paper" && choiceComp === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
        else if (choiceHuman === "scissors" && choiceComp === "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else if (choiceHuman === "scissors" && choiceComp === "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}


playGame();
console.log("Your score: " + humanScore);
console.log("Computer's score: " + computerScore);