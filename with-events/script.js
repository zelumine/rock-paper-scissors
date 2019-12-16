let compMove;
let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const buttons = Array.from(document.querySelectorAll("div.button"));
let moves = document.getElementById("moves");
let roundResult = document.getElementById("roundResult");
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

function playRound(playerSelection, computerSelection) {
  if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
      (playerSelection === "Scissors" && computerSelection === "Paper") || 
      (playerSelection === "Paper" && computerSelection === "Rock")) {
      playerScore++;
      roundResult.textContent = `${playerSelection} beats ${computerSelection}. You win, congrats!`;
      roundResult.classList.add("win");
      setTimeout(() => roundResult.classList.remove("win"), 700);
  } else if ((playerSelection === "Scissors" && computerSelection === "Rock") || 
             (playerSelection === "Paper" && computerSelection === "Scissors") || 
             (playerSelection === "Rock" && computerSelection === "Paper")) {
      computerScore++;
      roundResult.textContent = `${computerSelection} beats ${playerSelection}... You lose!`;
      roundResult.classList.add("lose");
      setTimeout(() => roundResult.classList.remove("lose"), 700);
  } else if ((playerSelection === "Scissors" && computerSelection === "Scissors") || 
            (playerSelection === "Rock" && computerSelection === "Rock") || 
            (playerSelection === "Paper" && computerSelection === "Paper")) {
      computerScore += 0;
      playerScore += 0;
      roundResult.textContent = "Oops! It's a tie!";
      roundResult.classList.add("tie");
      setTimeout(() => roundResult.classList.remove("tie"), 700);
  }
}

function game() {
  computerPlay();
  computerSelection = compMove;
  playRound(playerSelection, computerSelection);
  moves.textContent = `Computer plays:  ${compMove}`;
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
    roundResult.textContent = "";
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