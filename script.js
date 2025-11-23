function getComputerChoice() {
  let number = Math.random();
  let computerChoice = "";
  if (number <= 0.33) {
    computerChoice = "rock";
  } else if (number > 0.33 && number <= 0.66) {
    computerChoice = "paper";
  } else computerChoice = "scissors";

  return computerChoice;
}
function getHumanChoice() {
  let humanChoice = prompt("Choose your element");
  humanChoice = humanChoice.toLowerCase();

  return humanChoice;
}

function playGame() {
  let humanScore = 0,
    computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (computerChoice === "rock") {
      switch (humanChoice) {
        case "rock":
          console.log("Égalité !");
          break;
        case "paper":
          console.log("Gagné !");
          humanScore++;
          break;
        case "scissors":
          console.log("Perdu !");
          computerScore++;
          break;
      }
    } else if (computerChoice === "paper") {
      switch (humanChoice) {
        case "paper":
          console.log("Égalité !");
          break;
        case "scissors":
          console.log("Gagné !");
          humanScore++;
          break;
        case "rock":
          console.log("Perdu !");
          computerScore++;
          break;
      }
    } else if (computerChoice === "scissors") {
      switch (humanChoice) {
        case "scissors":
          console.log("Égalité !");
          break;
        case "rock":
          console.log("Gagné !");
          humanScore++;
          break;
        case "paper":
          console.log("Perdu !");
          computerScore++;
          break;
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    console.log("Manche : " + (i + 1));
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(
      "Ton choix : " + humanChoice + " Choix du PC : " + computerChoice
    );
    console.log(
      "--SCORES-- Humain : " + humanScore + " Machine : " + computerScore
    );
  }
}
playGame();
