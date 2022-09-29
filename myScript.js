//DISPLAYING RESULTS ON PAGE

const results = document.querySelector('.results-container');
const roundWinner = document.createElement('p');
const scoreKeeper = document.createElement('p');
const gameWinner = document.createElement('p');
results.appendChild(roundWinner);
results.appendChild(scoreKeeper);
results.appendChild(gameWinner);


//RUNNING THE GAME

let computerScore = 0; //Declares initial score for computer
let playerScore = 0; //Declares initial score for player

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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => { //Plays round & displays score every time button clicked
        if (computerScore < 5 && playerScore < 5) {
            let playerSelection = button.className;
            let computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
            scoreKeeper.textContent = `Your score is ${playerScore}. Computer score is ${computerScore}.`;//Displays score at end of each round
            if (computerScore >= 5) {
                gameWinner.textContent = "COMPUTER WINS!";
            } else if (playerScore >= 5) {
                gameWinner.textContent = "YOU WIN!";
            }
        } else {console.log("Restart game?")};
    });

});

function playRound(playerSelection, computerSelection) { //Compares player & computer responses to determine winner
    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            roundWinner.textContent = "It's a tie!";
        } else if (computerSelection == "Paper") {
            computerScore++;
            roundWinner.textContent = "You lose! Paper beats rock";
        } else if (computerSelection == "Scissors") {
            playerScore++;
            roundWinner.textContent = "You win! Rock beats scissors";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "Rock") {
            playerScore++;
            roundWinner.textContent = "You win! Paper beats rock";
        } else if (computerSelection == "Paper") {
            roundWinner.textContent = "It's a tie!";
        } else if (computerSelection == "Scissors") {
            computerScore++;
            roundWinner.textContent = "You lose! Scissors beats paper";
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "Rock") {
            computerScore++
            roundWinner.textContent = "You lose! Rock beats scissors";
        } else if (computerSelection == "Paper") {
            playerScore++;
            roundWinner.textContent = "You win! Scissors beats paper";
        } else if (computerSelection == "Scissors") {
            roundWinner.textContent = "It's a tie!";
        }
    } else {
        roundWinner.textContent = "You need to type rock, paper, or scissors.";
    }
}