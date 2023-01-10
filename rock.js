// Create a function to generate the computer's choice
function computerSelection() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// Create a function to play a single round of the game
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      return "You win! Rock beats scissors.";
    } else {
      return "You lose. Paper beats rock.";
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      return "You win! Paper beats rock.";
    } else {
      return "You lose. Scissors beats paper.";
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      return "You win! Scissors beats paper.";
    } else {
      return "You lose. Rock beats scissors.";
    }
  } else {
    return "Invalid selection. Please choose rock, paper, or scissors.";
  }
}

// // Create a function to play multiple rounds of the game
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, paper, or scissors?");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}

// // Start the game
game();
