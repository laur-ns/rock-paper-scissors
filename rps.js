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

function playRPS(playerSelection, computerSelection) {
  // turn both arguments into lowercase
  // if player is === computerselection result = draw
  // else if player is rock,
  //  if computer is scissors, result = win
  // else if player is paper, check computer
  //  if computer is rock, result = win
  // else if player is scissors, 
  //  if computer is paper, result = win
  // else print wrong input msg
  // 
  // if result = win print win msg
  // else print lose msg
  // 
}