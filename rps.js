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

function playRound(player, computer) {
  console.log(`Player: ${player}`);
  console.log(`Computer: ${computer}`);
  if (player === computer) {
    title.textContent = `That's a draw. You both picked ${player}!`;
    return "Draw";
  }
  else if (player === "Rock" && computer === "Scissors" ||
           player === "Paper" && computer === "Rock"    ||
           player === "Scissors" && computer === "Paper")
          { title.textContent = `You won this round. ${player} beats ${computer}!`;
            return "Win"; }
  else {
    title.textContent = `You lost this round. ${computer} beats ${player}!`;
    return "Lose";
  }
}

const winText = document.querySelector('div .win');
const loseText = document.querySelector('div .lose');
const title = document.querySelector('span');

let winCount = 0;
let loseCount = 0;
function game() {
  let userChoice = this.getAttribute('id');
  let result = playRound(userChoice, computerPlay());
  if (result === 'Win') { winCount++; }
  if (result === 'Lose') { loseCount++; }
  winText.innerHTML = `<u>Wins</u><br>${winCount}`;
  loseText.innerHTML = `<u>Losses</u><br>${loseCount}`;
  if (winCount == 3) {
    title.innerHTML = `<u>You won! Click a button to start again.</u>`;
    winCount = 0; loseCount = 0;
  }
  if (loseCount == 3) {
    title.innerHTML = `<u>You lost! Click a button to start again.</u>`;
    winCount = 0; loseCount = 0;
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(e => {
  e.addEventListener('click', game);
});


