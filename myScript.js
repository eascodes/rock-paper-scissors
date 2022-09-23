function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*100);
    if (randomNum < 33) {
        console.log("Rock");
        return "Rock";
    } else if (randomNum >= 33 && randomNum <= 66) {
        console.log("Paper");
        return "Paper";
    } else {
        console.log("Scissors");
        return "Scissors";
    }
}

getComputerChoice();
