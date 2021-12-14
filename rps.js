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
  if (playerSelection === null) { return null; }
  playerSelection = playerSelection.toLowerCase();
  let firstLetter = playerSelection.slice(0, 1);
  const player = firstLetter.toUpperCase() + playerSelection.substr(1);
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
  else if (player === "Rock" && computerSelection === "Scissors" ||
           player === "Paper" && computerSelection === "Rock"    ||
           player === "Scissors" && computerSelection === "Paper")
          { result = "Win"; }
  else {
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
  const message = "Enter Rock, Paper, or Scissors (output in console)";
  let winCount = 0
  let loseCount = 0;
  let result;

  while(winCount < 3 && loseCount < 3) {
  result = playRound(prompt(message), computerPlay());
  if (result === null) { return; }
  if (result.slice(4, 7) === "Win") {
    winCount++;
  }
  else if (result.slice(4, 8) === "Lose") {
    loseCount ++;
  }
  console.log(result);
  console.log(`You have ${winCount} wins and ${loseCount} losses`);
  console.log(" ");
  }
  
  if (winCount === 3) {
    console.log("You won!");
  } else { console.log("You lost!"); }
}