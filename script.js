let playerHearts = 5;
let computerHearts = 5;

let rockButton = document.getElementById("rock-button");
let paperButton = document.getElementById("paper-button");
let scissorsButton = document.getElementById("scissors-button");

let playerChoice = document.getElementById("player-choice");
let computerChoice = document.getElementById("computer-choice");

let outputMessage = document.querySelector(".output-message");
let outputText = document.querySelector(".output-text");

rockButton.addEventListener('click', function() {
  playerChoice.src = 'images/' + 'rock.png';
  handlePlayerChoice('rock');
});

paperButton.addEventListener('click', function() {
  playerChoice.src = 'images/' + 'paper.png';
  handlePlayerChoice('paper');
});

scissorsButton.addEventListener('click', function() {
  playerChoice.src = 'images/' + 'scissors.png';
  handlePlayerChoice('scissors');
});

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * 3);
  computerChoice.src = 'images/' + choices[randomNumber] + '.png';
  return choices[randomNumber];
}

function handlePlayerChoice(playerChoice) {
  let computerChoice = getComputerChoice();
  let winner;
  if (playerChoice === 'rock') {
    if (computerChoice === 'rock') {
      winner = 'tie';
    } else if (computerChoice === 'paper') {
      winner = 'computer';
    } else {
      winner = 'player';
    }
  } else if (playerChoice === 'paper') {
    if (computerChoice === 'rock') {
      winner = 'player';
    } else if (computerChoice === 'paper') {
      winner = 'tie';
    } else {
      winner = 'computer';
    }
  }
  else if (playerChoice === 'scissors') {
    if (computerChoice === 'rock') {
      winner = 'computer';
    } else if (computerChoice === 'paper') {
      winner = 'player';
    } else {
      winner = 'tie';
    }
  }

  handleOutputMessage(winner);
  handleOutputText(playerChoice, computerChoice);
  handleHearts(winner);
  handleGameOver();
}

function handleOutputMessage(winner) {
  if (winner === 'player') {
    outputMessage.innerHTML = "You win!";
  } else if (winner === 'computer') {
    outputMessage.innerHTML = "Computer wins!";
  } else {
    outputMessage.innerHTML = "It's a tie!";
  }
}

function handleOutputText(playerChoice, computerChoice) {
  playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1);
  computerChoice = computerChoice[0].toUpperCase() + computerChoice.slice(1);
  outputText.innerHTML = `You chose ${playerChoice}. The computer chose ${computerChoice}.`;
}

function handleHearts(winner) {
  if (winner === 'player') {
    let computerHeart = document.getElementById(`computer-heart-${computerHearts}`);
    computerHeart.src = 'images/missing-heart.png'
    computerHearts--;
  } else if (winner === 'computer') {
    let playerHeart = document.getElementById(`player-heart-${playerHearts}`);
    playerHeart.src = 'images/missing-heart.png'
    playerHearts--;
  }
}

function handleGameOver() {
  if (playerHearts === 0) {
    alert("Game over. You lost!");
    resetGame();
  } else if (computerHearts === 0) {
    alert("Game over. You won!");
    resetGame();
  }
}

function resetGame() {
  for (let i = 1; i <= 5; i++) {
    let playerHeart = document.getElementById(`player-heart-${i}`);
    let computerHeart = document.getElementById(`computer-heart-${i}`);
    playerHeart.src = 'images/heart.png';
    computerHeart.src = 'images/heart.png';
  }
  playerHearts = 5;
  computerHearts = 5;
  outputMessage.innerHTML = "Choose your weapon";
  outputText.innerHTML = "First to 5 wins!";
}
