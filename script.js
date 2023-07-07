function getComputerChoice() {

    let randomNumber = Math.random();
    if(randomNumber < 0.33) {
        return "rock";
    } else if(randomNumber <= 0.66) {
        return "paper";
    } else {
        return "scissors"
    }

}


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
        console.log(`You win, your ${playerValue} beats opponent's ${computerValue}!`);
    } else if (playerValue.length === computerValue.length) {
        console.log("It's a tie!");
    } else {
        computerPoints++;
        console.log(`You lost, ${playerValue} loses to opponent's ${computerValue}.`);
    }

    totalPlayerPoints += playerPoints;
    totalComputerPoints += computerPoints;
    return [totalPlayerPoints, totalComputerPoints];
}

function game() {

    totalComputerPoints = 0;
    totalPlayerPoints = 0;

    for(i = 0; i < 5; i++) {
        playerValueOne = prompt("Rock, paper, or scissors?");
        playerValue = playerValueOne.toLowerCase();

        if( playerValue !== "rock" &&
        playerValue !== "paper" &&
        playerValue !== "scissors" ) {
            console.log("You didn't write a proper value.")
            return;
        }

        const computerValue = getComputerChoice();
        gameRound(playerValue, computerValue);
    }

    if(totalPlayerPoints === 5) {
        console.log(`You absolutely destroyed your opponent, good job! Overall score: ${totalPlayerPoints} - ${totalComputerPoints}`)
    } else if(totalComputerPoints === 5) {
        console.log(`Wow you got absolutely destroyed by your opponent. Overall score: ${totalPlayerPoints} - ${totalComputerPoints}`)
    } else if(totalPlayerPoints > totalComputerPoints) {
        console.log(`You won the whole game! Overall score: ${totalPlayerPoints} - ${totalComputerPoints}`);
    } else if(totalComputerPoints > totalPlayerPoints) {
        console.log(`You lost the game. Overall score: ${totalPlayerPoints} - ${totalComputerPoints}`)
    } else {
        console.log(`The game ended in a tie. Overall score: ${totalPlayerPoints} - ${totalComputerPoints}`)
    }

}

console.log("Type 'game()' and hit enter to start the game.")