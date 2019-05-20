let compMove;
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const buttons = document.querySelectorAll("button");
let moves = document.getElementById("moves");
let roundResult = document.createElement("p");
let scores = document.getElementById("score");
let result = document.getElementById("result");


function computerPlay() {
    let compNumber = Math.floor(Math.random() * 3);

    if(compNumber === 0) {
        compMove = "Rock";
    } else if (compNumber === 1) {
        compMove = "Paper";
    } else {
        compMove = "Scissors";
    }
}    

computerPlay();
computerSelection = compMove;

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
            (playerSelection === "Scissors" && computerSelection === "Paper") || 
            (playerSelection === "Paper" && computerSelection === "Rock")) {
        playerScore++;
        roundResult.textContent = `${playerSelection} beats ${computerSelection}. You win, congrats!`;
    } else if ((playerSelection === "Scissors" && computerSelection === "Rock") || 
            (playerSelection === "Paper" && computerSelection === "Scissors") || 
            (playerSelection === "Rock" && computerSelection === "Paper")) {
        computerScore++;
        roundResult.textContent = `${computerSelection} beats ${playerSelection}... You lose!`;
    } else if ((playerSelection === "Scissors" && computerSelection === "Scissors") || 
            (playerSelection === "Rock" && computerSelection === "Rock") || 
            (playerSelection === "Paper" && computerSelection === "Paper")) {
        computerScore += 0;
        playerScore += 0;
        roundResult.textContent = "Oops! It's a tie!";
    }
}

function game() {
    computerPlay();
    playRound(playerSelection, computerSelection);
        moves.textContent = `Computer plays:  ${compMove}`;
        moves.appendChild(roundResult);
        scores.textContent = `Player: ${playerScore} - ${computerScore} : Computer`;    

    if(playerScore === 5 || computerScore === 5) {
        if(playerScore > computerScore) {
            result.textContent = `You have ${playerScore} points and computer has ${computerScore} points. Congrats, you win!`;
            result.style.color = 'green';
            setTimeout( () => {
                result.textContent = "";
            }, 1500);
        } else {
            result.textContent = `You have ${playerScore} points and computer has ${computerScore} points. Sorry buddy, you lose.`;
            result.style.color = 'red';
            setTimeout( () => {
                result.textContent = "";
            }, 1500);
        }
        playerScore = 0;
        computerScore = 0;
        setTimeout( () => {
        moves.textContent = "Another round?!";
        }, 1500);
        scores.textContent = "";
    }
}

function playerPlay(e) {
    if(e.target.id === "rock") {
        playerSelection = "Rock";
    } else if(e.target.id === "paper") {
        playerSelection = "Paper";
    } else if(e.target.id === "scissors") {
        playerSelection = "Scissors";
    }
    game();
}

buttons.forEach((button) => {
    button.addEventListener('click', playerPlay);
});