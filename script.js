const div = document.createElement('div');
const divTwo = document.createElement('div');
const scriptTag = document.querySelector('script');

document.body.insertBefore(div, scriptTag);
document.body.insertBefore(divTwo, scriptTag);

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(item => item.addEventListener('click', game));

function getComputerChoice() {

    const computerValue = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * computerValue.length);
    return computerValue[randomIndex];

}

let totalPlayerPoints = 0;
let totalComputerPoints = 0;

function game(event) {

    const playerValue = event.target.textContent;
    const playerValueLower = playerValue.toLowerCase();
    const computerValue = getComputerChoice();

    let playerPoints = 0;
    let computerPoints = 0;

    if (
        (playerValueLower.length === 8 && computerValue.length === 5) ||
        (playerValueLower.length === 5 && computerValue.length === 4) ||
        (playerValueLower.length === 4 && computerValue.length === 8)
    ) {
        playerPoints++;
        div.textContent = `You win, your ${playerValueLower} beats opponent's ${computerValue}!`;
    } else if (playerValueLower.length === computerValue.length) {
        div.textContent = "It's a tie!";
    } else {
        computerPoints++;
        div.textContent = `You lost, ${playerValueLower} loses to opponent's ${computerValue}.`;
    }

    totalPlayerPoints += playerPoints;
    totalComputerPoints += computerPoints;

    divTwo.textContent = `Score ${totalPlayerPoints} - ${totalComputerPoints}`;

    while (totalComputerPoints === 5 || totalPlayerPoints === 5) {

        if (totalPlayerPoints > totalComputerPoints) {
            div.textContent = 'You won the Whole game!';
            divTwo.textContent = `Total score ${totalPlayerPoints} - ${totalComputerPoints}`;
            return [(totalPlayerPoints = 0), (totalComputerPoints = 0)];
        } else if (totalPlayerPoints < totalComputerPoints) {
            div.textContent = `You lost the whole game.`;
            divTwo.textContent = `Total score ${totalPlayerPoints} - ${totalComputerPoints}`;
            return [(totalPlayerPoints = 0), (totalComputerPoints = 0)];
        } else {
            div.textContent = `The game ended in a tie.`;
            divTwo.textContent = `Total score ${totalPlayerPoints} - ${totalComputerPoints}`;
            return [(totalPlayerPoints = 0), (totalComputerPoints = 0)];
        }

    }

}
