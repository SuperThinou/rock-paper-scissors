// ALGO
let humanChoice = null,
  humanScore = 0,
  computerScore = 0;

function getComputerChoice() {
  let number = Math.random();
  let computerChoice = "";
  if (number <= 0.33) {
    computerChoice = "🪨";
  } else if (number > 0.33 && number <= 0.66) {
    computerChoice = "🧻";
  } else computerChoice = "✂️";

  return computerChoice;
}

function playGame() {
  if (!humanChoice) return;
  const computerChoice = getComputerChoice();
  roundResultStyle.classList.remove("hidden");
  userElement.textContent = humanChoice;
  computerElement.textContent = computerChoice;

  const result = playRound(humanChoice, computerChoice);
  updateUI();

  if (humanScore === 3 || computerScore === 3) {
    winner.textContent = humanScore === 3 ? "You win !" : "Computer wins !";
    document.querySelector(".modal").showModal();
    modal.classList.add("open");
    resetGame();
  }
}

function playRound(humanChoice, computerChoice) {
  itemButtons.forEach((b) => b.classList.remove("selected"));
  deactivatePlayButton();
  if (humanChoice === computerChoice) {
    roundResultUI.textContent = "It's a tie!";
    return "draw";
  } else if (
    (humanChoice === "🪨" && computerChoice === "✂️") ||
    (humanChoice === "🧻" && computerChoice === "🪨") ||
    (humanChoice === "✂️" && computerChoice === "🧻")
  ) {
    roundResultUI.textContent = "You win!";
    humanScore++;
    return "win";
  } else {
    roundResultUI.textContent = "You loose..";
    computerScore++;
    return "lose";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateUI();
  deactivatePlayButton();
  roundResultStyle.classList.add("hidden");
}

function updateUI() {
  playerScoreUI.textContent = humanScore;
  computerScoreUI.textContent = computerScore;
}

// UI
const rockBtn = document.querySelector("#rockBtn"),
  paperBtn = document.querySelector("#paperBtn"),
  scissorsBtn = document.querySelector("#scissorsBtn"),
  playBtn = document.querySelector("#playBtn"),
  roundResultUI = document.querySelector("#roundResultUI"),
  roundResultStyle = document.querySelector(".round-result"),
  winner = document.querySelector("#winner"),
  modal = document.querySelector(".modal"),
  closeBtn = document.querySelector("#closeBtn");
roundResultStyle.classList.add("hidden");

let playerScoreUI = document.querySelector("#playerScoreUI"),
  computerScoreUI = document.querySelector("#computerScoreUI"),
  userElement = document.querySelector("#userElement"),
  computerElement = document.querySelector("#computerElement");
playerScoreUI.textContent = humanScore;
computerScoreUI.textContent = computerScore;

rockBtn.addEventListener("click", () => {
  humanChoice = "🪨";
  activatePlayButton();
});
paperBtn.addEventListener("click", () => {
  humanChoice = "🧻";
  activatePlayButton();
});
scissorsBtn.addEventListener("click", () => {
  humanChoice = "✂️";
  activatePlayButton();
});

playBtn.addEventListener("click", playGame);

const itemButtons = document.querySelectorAll(".item-button");

itemButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    itemButtons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

function activatePlayButton() {
  playBtn.disabled = false;
  playBtn.setAttribute("style", "background: #fadd00");
}

function deactivatePlayButton() {
  playBtn.disabled = true;
  playBtn.setAttribute("style", "background: grey");
}

deactivatePlayButton();

closeBtn.addEventListener("click", () => {
  modal.close();
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});
