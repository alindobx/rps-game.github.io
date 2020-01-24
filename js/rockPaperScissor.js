const rockImage = "img/Rock.jpg";
const paperImage = "img/Paper.jpg";
const scissorsImage = "img/Scissors.jpg";

const rock = document.getElementById("rock").addEventListener("click", () => {
  startGame("rock", rockImage);
});
const paper = document.getElementById("paper").addEventListener("click", () => {
  startGame("paper", paperImage);
});
const scissors = document.getElementById("scissors").addEventListener("click", () => {
    startGame("scissors", scissorsImage);
  });

let computerChoice;
const computerWeapons = ["rock", "paper", "scissors"];

function startGame(weapon, image) {
  computerChoice = randomSelection();
  createWeaponImage(weapon, image);
  compareWeapons(weapon, image);
}

function randomSelection() {
    return computerWeapons[Math.floor(Math.random() * computerWeapons.length)];
}

const player = document.getElementById("user");
const computer = document.getElementById("computer");
const winner = document.getElementById("winner");

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => {
  player.innerHTML = "";
  computer.innerHTML = "";
  winner.innerHTML = "";
});

function createWeaponImage(weapon, image) {
  const user = document.createElement("IMG");
  user.setAttribute("src", image);
  player.innerHTML = "";
  player.append(user);
}

function createComputerImage(image) {
  computer.innerHTML = "";
  const insertComputerImage = document.createElement("IMG");
  if (computerChoice === "rock") {
    insertComputerImage.setAttribute("src", image);
    computer.append(insertComputerImage);
  } else if (computerChoice === "paper") {
    insertComputerImage.setAttribute("src", image);
    computer.append(insertComputerImage);
  } else {
    insertComputerImage.setAttribute("src", image);
    computer.append(insertComputerImage);
  }
}

function compareWeapons(weapon, image) {
  //tie scenario
  if (weapon === computerChoice) {
    createComputerImage(image);
    winner.innerHTML = "No Winner - This is a Tie";
    // paper covers rock - paper wins
  } else if (
    (weapon === "rock" && computerChoice === "paper") ||
    (computerChoice === "rock" && weapon === "paper")
  ) {
    if (computerChoice === "paper") {
      createComputerImage(paperImage);
      winner.innerHTML = "COMPUTER WINS!";
    } else {
      createComputerImage(rockImage);
      winner.innerHTML = "PLAYER WINS!";
    }
    // rock breaks scissors - rock wins
  } else if (
    (weapon === "rock" && computerChoice === "scissors") ||
    (computerChoice === "rock" && weapon === "scissors")
  ) {
    if (computerChoice === "rock") {
      createComputerImage(rockImage);
      winner.innerHTML = "COMPUTER WINS!";
    } else {
      createComputerImage(scissorsImage);
      winner.innerHTML = "PLAYER WINS!";
    }
    // scissors cuts paper - scissors wins
  } else if (
    (weapon === "scissors" && computerChoice === "paper") ||
    (computerChoice === "scissors" && weapon === "paper")
  ) {
    if (computerChoice === "paper") {
      createComputerImage(paperImage);
      winner.innerHTML = `Scissors Cuts Paper <br>PLAYER WINS!`;
      winner.style.textAlignLast = "center";
    } else {
      createComputerImage(scissorsImage);
      winner.innerHTML = `Scissors Cuts Paper <br>COMPUTER WINS!`;
      winner.style.textAlignLast = "center";
    }
  }
}


