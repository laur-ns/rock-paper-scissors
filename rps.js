function computerPlay() {
  randomNumber = Math.random();
  if (randomNumber < (1 / 3)) {
    return "Rock";
  }
  else if (randomNumber < (2/3)) {
    return "Paper";
  }
  else { return "Scissors"; }
}

function playRound(playerSelection, computerSelection) {
  if (player === computerSelection) {
    return "Draw";
  }
  else if (player === "Rock" && computerSelection === "Scissors" ||
           player === "Paper" && computerSelection === "Rock"    ||
           player === "Scissors" && computerSelection === "Paper")
          { return "Win"; }
  else {
    return "Lose";
  }
}

