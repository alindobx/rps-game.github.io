const rockImage = "img/Rock.jpg";
const paperImage = "img/Paper.jpg";
const scissorsImage = "img/Scissors.jpg";

const rock = document.getElementById("rock").addEventListener("click", () => {
  engage("rock", rockImage);
  console.log('You =', 'Rock Was Selected')
});
const paper = document.getElementById("paper").addEventListener("click", () => {
    engage("paper", paperImage);
    console.log('You =', 'Paper Was Selected')
});
const scissors = document.getElementById("scissors").addEventListener("click", () => {
    engage("scissors", scissorsImage);
    console.log('You =', 'Scissors Was Selected')
});

function engage(weapon, image) {
    createWeaponImage(weapon, image);
    compareWeapons(weapon, image);
}

const player = document.getElementById('user');
const computer = document.getElementById('computer');
const winner = document.getElementById('winner');

const computerChoice = randomSelection();

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', ()=>{
    player.innerHTML = '';
    computer.innerHTML ='';
    winner.innerHTML = '';
});

function createWeaponImage (weapon, image) {
    const user = document.createElement('IMG');
    user.setAttribute('src',image);
    player.innerHTML = '';
    player.append(user);
}

function randomSelection() {
    const computerChoices = ['rock','paper','scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function createComputerImage(image){
    computer.innerHTML = '';
    const insertComputerImage = document.createElement("IMG");
    if(computerChoice === 'rock') {
        insertComputerImage.setAttribute("src", image);
        computer.append(insertComputerImage);
    }else if(computerChoice === "paper"){
        insertComputerImage.setAttribute("src", image);
        computer.append(insertComputerImage);
    }else{
        insertComputerImage.setAttribute("src", image);
        computer.append(insertComputerImage);
    }
}

function compareWeapons (weapon,image) {
    console.log(`Your Choice = ${weapon} vs. Computer Choice = ${computerChoice}`);
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
        console.log("Computer wins");
      } else {
        createComputerImage(rockImage);
        winner.innerHTML = "PLAYER WINS!";
        console.log("You Win");
      }
      // rock breaks scissors - rock wins
    } else if (
      (weapon === "rock" && computerChoice === "scissors") ||
      (computerChoice === "rock" && weapon === "scissors")
    ) {
      if (computerChoice === "rock") {
        createComputerImage(rockImage);
        winner.innerHTML = "COMPUTER WINS!";
        console.log("Computer Wins!!!");
      } else {
        createComputerImage(scissorsImage);
        winner.innerHTML = "PLAYER WINS!";
        console.log("You Win");
      }
      // scissors cuts paper - scissors wins
    } else if (
      (weapon === "scissors" && computerChoice === "paper") ||
      (computerChoice === "scissors" && weapon === "paper")) {
        if (computerChoice === "paper") {
            createComputerImage(paperImage);
            winner.innerHTML = "COMPUTER WINS!";
            console.log("Computer Wins!!!");
        }else {
            createComputerImage(scissorsImage);
            winner.innerHTML = "PLAYER WINS!";
            console.log("You Wins!!!");
        }
    }
}


