/* Create a function that randomly returns either 
rock, paper, or scissors DONE*/

function getComputerChoice() {

    let randomNumber = Math.random();
    if(randomNumber <= 0.33) {
        return "rock";
    } else if(randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors"
    }

}

/* Write a function that plays a single round of rock paper scissors.
The function should take two parameters - playerSelection and 
computerSelection, and then return a string that declares the
winner of the round DONE*/

let totalPlayerPoints = 0;
let totalComputerPoints = 0;

function gameRound(playerValue, computerValue) {
    let playerPoints = 0;
    let computerPoints = 0;

    if (
        (playerValue.length === 8 && computerValue.length === 5) ||
        (playerValue.length === 5 && computerValue.length === 4) ||
        (playerValue.length === 4 && computerValue.length === 8)
    ) {
        playerPoints++;
        console.log("You win, " + playerValue + " beats " + computerValue + "!");
    } else if (playerValue.length === computerValue.length) {
        console.log("It's a tie!");
    } else {
        computerPoints++;
        console.log("You lose, " + playerValue + " doesn't beat " + computerValue + ".");
    }

    totalPlayerPoints += playerPoints;
    totalComputerPoints += computerPoints;
    return [totalPlayerPoints, totalComputerPoints];
}

// Make function's playerSelection parameter case-insensitive

/* Write a function called game(), and use the previous function
INSIDE this function to play a 5 round game that keeps score and
reports a winner at end */

function game() {

    for(i = 0; i < 5; i++) {
        playerValueOne = prompt("Rock, paper, or scissors?");
        playerValue = playerValueOne.toLowerCase();
        const computerValue = getComputerChoice();
        gameRound(playerValue, computerValue);
    }

    if(totalPlayerPoints > totalComputerPoints) {
        console.log("You won the whole game!");
    } else if(totalComputerPoints > totalPlayerPoints) {
        console.log("You lost the game.")
    } else {
        console.log("The game ended in a tie.")
    }

}