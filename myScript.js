let computerScore = 0;
let playerScore = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        
        let playerSelection = prompt("Rock, paper, or scissors?");

        function getComputerChoice() { //Determine's computer's response
            let randomNum = Math.floor(Math.random()*100);
            if (randomNum < 33) {
                return "Rock";
            } else if (randomNum >= 33 && randomNum <= 66) {
                return "Paper";
            } else {
                return "Scissors";
            }
        }
        
        const computerSelection = getComputerChoice();

        function playRound(playerSelection, computerSelection) { //Compares player & computer responses to determine winner
            playerSelection = playerSelection.toLowerCase();
            if (playerSelection == "rock") {
                if (computerSelection == "Rock") {
                    return "It's a tie!";
                } else if (computerSelection == "Paper") {
                    computerScore++;
                    return "You lose! Paper beats rock";
                } else if (computerSelection == "Scissors") {
                    playerScore++;
                    return "You win! Rock beats scissors";
                }
            } else if (playerSelection == "paper") {
                if (computerSelection == "Rock") {
                    playerScore++;
                    return "You win! Paper beats rock";
                } else if (computerSelection == "Paper") {
                    return "It's a tie!";
                } else if (computerSelection == "Scissors") {
                    computerScore++;
                    return "You lose! Scissors beats paper";
                }
            } else if (playerSelection == "scissors") {
                if (computerSelection == "Rock") {
                    computerScore++
                    return "You lose! Rock beats scissors";
                } else if (computerSelection == "Paper") {
                    playerScore++;
                    return "You win! Scissors beats paper";
                } else if (computerSelection == "Scissors") {
                    return "It's a tie!";
                }
            } else {
                console.log("You need to type rock, paper, or scissors.");
            }
        }
        
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Your score is ${playerScore}. Computer score is ${computerScore}.`);
    }

    if (playerScore > computerScore) {
        console.log("YOU WIN!");
    } else if (computerScore > playerScore) {
        console.log("You lose. Better luck next time!");
    } else {
        console.log("It's a tie!");
    }
}

game();