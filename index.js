
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

const update = document.querySelector("#update");
update.textContent = ""

// BUTTON EVENT TO HTML
buttons.forEach((button) => {button.addEventListener('click', () => {

// WHEN A CERTAIN BUTTON IS CLICKED ITS PLACED INTO THE USERCHOICE VARIABLE AS INT
userChoice = button.id;
game(userChoice);
    });
});

function computerPlay() {
let compArray = ['rock', 'paper', 'scissors']; 
let random = Math.floor(Math.random() * compArray.length);
//console.log("cpu played:" + compArray[random]);
    return compArray[random];
}

/*function playRound(userChoice, userScore, computerScore) {
let compChoice = computerPlay();

    if (compChoice == userChoice) {
        output.textContent = `tie. user: ${userChoice} comp: ${compChoice}`;
    }
    else if (compChoice === 'rock' && userChoice === 'scissors') {
        computerScore++;
        output.textContent = `comp wins. user: ${userChoice} comp: ${compChoice}`;
    }
    else if (compChoice === 'paper' && userChoice === 'rock') {
        computerScore++;
        output.textContent = `comp wins. user: ${userChoice} comp: ${compChoice}`;
    }
    else if (compChoice === 'scissors' && userChoice === 'paper') {
        computerScore++;
        output.textContent = `comp wins. user: ${userChoice} comp: ${compChoice}`;
    }
    else if (userChoice === 'rock' && compChoice === 'scissors') {
        userScore++;
        output.textContent = `user wins. user: ${userChoice} comp: ${compChoice}`;
    }
    else if (userChoice === 'paper' && compChoice === 'rock') {
        userScore++;
        output.textContent = `user wins. user: ${userChoice} comp: ${compChoice}`;
    }
    else if (userChoice === 'scissors' && compChoice === 'paper') {
        userScore++;
        output.textContent = `user wins. user: ${userChoice} comp: ${compChoice}`;
    }
    return [userScore, computerScore];
}*/
function playRound(userChoice, userScore, computerScore) {
let compChoice = computerPlay();

    if (compChoice == userChoice) {
        output.textContent = `Tie.`;
        update.textContent = `User: ${userChoice} & Computer: ${compChoice}`;
    }
    else if (compChoice == winDictionary[userChoice]) {
        userScore++;
        output.textContent = `Point to User!`;
        update.textContent = `User: ${userChoice} & Computer: ${compChoice}`;

    }    
    else {
        computerScore++;
        output.textContent = `Point to Computer!`;
        update.textContent = `User: ${userChoice} & Computer: ${compChoice}`;
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
        output.textContent = "Wow. You won.";
        userScore = 0;
        computerScore = 0;
        user.textContent = `User Score: ${userScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
    else if (computerScore == 5) {
        output.textContent = "You lost lol";
        userScore = 0;
        computerScore = 0;
        user.textContent = `User Score: ${userScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
}
