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
  // -- turn first letter of player input into uppercase -- //
  playerSelection   = playerSelection.toLowerCase();
  let firstLetter = playerSelection.slice(0, 1);
  const player = firstLetter.toUpperCase() + playerSelection.substr(1);
  console.log(player, computerSelection);
  // -- validates input -- //
  switch (player) {
    case "Rock": case "Paper": case "Scissors": break;
    default: return "ERROR: Incorrect value entered.";
  }


  let result;
  let winner = player;
  let loser  = computerSelection;
  if (player === computerSelection) {
    result = "Draw";
  }
  else if (player === "Rock" && computerSelection === "Scissors") {
    result = "Win";
  }
  else if (player === "Paper" && computerSelection === "Rock") {
    result = "Win";
  }
  else if (player === "Scissors" && computerSelection === "Paper") {
    result = "Win";
  } else {
    result = "Lose";
    let temp = winner; // swap values
    winner = loser;
    loser = temp;
  }


  if (result === "Draw") {
    return `That's a draw! You both picked ${player}`
  }
  return `You ${result}! ${winner} beats ${loser}`
}

function game() {
  
}