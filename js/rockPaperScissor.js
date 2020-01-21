const div = document.getElementById('user');
const rockImage = "img/Rock.jpg";
const paperImage = "img/Paper.jpg";
const scissorsImage = "img/Scissors.jpg";
const rockChoose = 'rock';
const paperChoice = 'paper';
const scissorsChoice = 'paper';

const randomSelection = () => {
    const computerChoices = ['rock','paper','scissors'];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

//Selecting the Rock
document.getElementById('rock').addEventListener('click',() => {
    div.replaceWith(createWeaponImage(rockChoose,rockImage));
    createWeaponImage(rockChoose, rockImage);
    computerSelection(rockChoose, rockImage)
});

//Selecting the Paper
document.getElementById('paper').addEventListener('click',() => {
    div.replaceWith(createWeaponImage( paperChoice,paperImage ));
    createWeaponImage(rockChoose, rockImage);
});

//Selecting the Scissors
document.getElementById('scissors').addEventListener('click',() => {
    div.replaceWith(createWeaponImage( scissorsChoice,scissorsImage ));
    createWeaponImage(scissorsChoice,scissorsImage);
});


function createWeaponImage (weapon, image) {
    const user = document.createElement('IMG');
    user.setAttribute('src',image);
    return user
}

function computerSelection(weapon,image){
    const computerDraw = randomSelection();
    //tie scenario
    if(weapon === computerDraw) {
        document.getElementById('computer').append(createWeaponImage(weapon,image));
        document.getElementById('winner').innerHTML = 'Tie';
    }else if(weapon !== computerDraw && computerDraw === 'paper' ) {
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
}


// const rock = document.getElementById('rock').addEventListener('click',computerSelection);
// const paper = document.getElementById('paper').addEventListener('click',computerSelection);
// const scissors = document.getElementById('scissors').addEventListener('click',selectScissors);

console.log(randomSelection());
