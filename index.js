
const buttons = document.querySelectorAll('.btn');
let userSelection;
let userChoice = "";
const winDictionary = {'rock': 'scissors', 'paper': 'rock', 'scissors': 'paper'};

// SCORES
let userScore = 0;
let computerScore = 0;

// TEXT
const user = document.querySelector("#user-score");
user.textContent = `User Score: ${userScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector("#output");
output.textContent = "Click Rock, Paper, or Scissors to Start!"

const updateUser = document.querySelector("#update-user");
updateUser.textContent = "User:"

const updateComp = document.querySelector('#update-comp');
updateComp.textContent = "Computer:"

const userScoreId = document.getElementById('user-score');
const compScoreId = document.getElementById('comp-score');
const modalOverlay = document.querySelector('.modal-overlay');
const modalContainer = document.querySelector('.modal-container');
const winnerOutput = document.querySelector('.winner-output');
const restartBtn = document.querySelector('.restart');


// BUTTON EVENT TO HTML
buttons.forEach((button) => {button.addEventListener('click', () => {
userChoice = button.id;
game(userChoice);
    });
});

restartBtn.addEventListener('click', restartGame);

function computerPlay() {
let compArray = ['rock', 'paper', 'scissors']; 
let random = Math.floor(Math.random() * compArray.length);
//console.log("cpu played:" + compArray[random]);
    return compArray[random];
}

function playRound(userChoice, userScore, computerScore) {
let compChoice = computerPlay();

    if (compChoice == userChoice) {
        output.textContent = `Tie.`;
        updateUser.textContent = `User: ${userChoice}`;
        updateComp.textContent = `Computer: ${compChoice}`;
        compScoreId.id = 'comp-score';
        userScoreId.id = 'user-score';
        updateUser.id = 'update-user';
        updateComp.id = 'update-comp';

    }
    else if (compChoice == winDictionary[userChoice]) {
        userScore++;
        output.textContent = `Point to User!`;
        updateUser.textContent = `User: ${userChoice}`;
        updateUser.id = 'update-user-active';
        updateComp.textContent = `Computer: ${compChoice}`;
        updateComp.id = 'update-comp';
        userScoreId.id = 'user-score-active';
        compScoreId.id = 'comp-score';
    }    
    else {
        computerScore++;
        output.textContent = `Point to Computer!`;
        updateUser.textContent = `User: ${userChoice}`;
        updateUser.id = 'update-user';
        updateComp.textContent = `Computer: ${compChoice}`;
        updateComp.id = 'update-comp-active';
        compScoreId.id = 'comp-score-active';
        userScoreId.id = 'user-score';
    }
    return [userScore, computerScore];

}

function game(userChoice) {
    output.textContent = "Choose Rock, Paper, or Scissors";
    let scores = playRound(userChoice, userScore, computerScore);
    userScore = scores[0];
    computerScore = scores[1];

    user.textContent = `User Score: ${userScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;

    if (userScore == 5) {
        output.textContent = '';
        userScore = 0;
        computerScore = 0;
        user.textContent = `User Score: ${userScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        modalOverlay.classList.add('active')
        winnerOutput.textContent = "Wow. You won."
    }
    else if (computerScore == 5) {
        output.textContent = '';
        userScore = 0;
        computerScore = 0;
        user.textContent = `User Score: ${userScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
        modalOverlay.classList.add('active')
        winnerOutput.textContent = "You lost. Lol."
    }
}

function restartGame() {
    modalOverlay.classList.remove('active');
}