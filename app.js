let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
const ROCK_DIV = document.querySelector("#rock");
const PAPER_DIV = document.querySelector("#paper");
const SCISSORS_DIV = document.querySelector("#scissors");
const MESSAGE_DIV = document.querySelector("#message");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const retVal = Math.floor(Math.random()*3);
    return choices[retVal];
}

function win(userChoice, computerChoice) {
    const msg = `${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}. You win!`;
    MESSAGE_DIV.innerHTML = msg;
    userScore.innerHTML++;
}

function lose(userChoice, computerChoice) {
    const msg = `${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}. You Lose!`;
    MESSAGE_DIV.innerHTML = msg;
    compScore.innerHTML++;
}

function draw(userChoice, computerChoice) {
    const msg = `${userChoice.toUpperCase()} equals ${computerChoice.toUpperCase()}. Round Draw!`;
    MESSAGE_DIV.innerHTML = msg;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch(userChoice+computerChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;

        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;

        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    ROCK_DIV.addEventListener("click", function () {
       game("rock");
    });

    PAPER_DIV.addEventListener("click", function () {
       game("paper");
    });

    SCISSORS_DIV.addEventListener("click", function () {
        game("scissors");
    })
}

main();