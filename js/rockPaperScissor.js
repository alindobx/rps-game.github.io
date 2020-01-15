// User can select a rock, paper or scissors
// When selecting an item, the user is updated to:
// what the computer player has chosen
// whether they have won or lost
// The user can play as many times as they want

const selectRock = () => {
    document.getElementById('user').innerHTML =
        `<img src="img/Rock.jpg" alt="Rock"  >`;
    const computerDraw = randomSelection();
    if("rock" === computerDraw) {
        document.getElementById('computer').innerHTML =
            `<img src="img/Rock.jpg" alt="Rock"  >`;
        document.getElementById('winner').innerHTML = 'Tie';
    }else if('paper' === computerDraw ) {
        document.getElementById('computer').innerHTML =
            `<img src="img/Paper.jpg" alt="Paper"  >`;
        document.getElementById('winner').innerHTML =
            `<img src="img/paperoRock.jpg" alt="Paper"  >`;
    }else{
        document.getElementById('computer').innerHTML =
            `<img src="img/Scissors.jpg" alt="Scissors"  >`;
        document.getElementById('winner').innerHTML =
            `<img src="img/RockOScissors.jpg" alt="Scissors"  >`;
    }
};
const selectPaper = () => {
    console.log('paper')
};
const selectScissors = () => {
    console.log('scissors')
};

const randomSelection = () => {
    const computerChoices = ['rock','paper','scissors'];
   return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

const rock = document.getElementById('rock').addEventListener('click',selectRock);
const paper = document.getElementById('paper').addEventListener('click',selectPaper);
const scissors = document.getElementById('scissors').addEventListener('click',selectScissors);



console.log(randomSelection());
