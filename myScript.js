function getComputerChoice() { //Determine's computer's response
    let randomNum = Math.floor(Math.random()*100);
    if (randomNum < 33) {
        //console.log("Rock");
        return "Rock";
    } else if (randomNum >= 33 && randomNum <= 66) {
        //console.log("Paper");
        return "Paper";
    } else {
        //console.log("Scissors");
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) { //Compares player & computer responses to determine winner
    playerSelection = playerSelection.toLowerCase();
    //console.log(playerSelection);
    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            return "It's a tie!";
        } else if (computerSelection == "Paper") {
            return "You lose! Paper beats Rock";
        } else if (computerSelection == "Scissors") {
            return "You win! Rock beats scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            return "You win! Paper beats rock";
        } else if (computerSelection == "Paper") {
            return "It's a tie!";
        } else if (computerSelection == "Scissors") {
            return "You lose! Scissors beats paper";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "Rock") {
            return "You lose! Rock beats scissors";
        } else if (computerSelection == "Paper") {
            return "You win! Scissors beats paper";
        } else if (computerSelection == "Scissors") {
            return "It's a tie!";
        }
    } else {
        console.log("Error!!!");
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
