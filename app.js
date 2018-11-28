let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
const ROCK_DIV = document.querySelector("#rock");
const ROCK_IMG = document.querySelector("#rock > img");
const PAPER_IMG = document.querySelector("#paper > img");
const SCISSORS_IMG = document.querySelector("#scissors > img");
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

    ROCK_DIV.addEventListener("mousedown", function () {
       ROCK_IMG.classList.add("grow");
    });

    ROCK_DIV.addEventListener("mouseup",function () {
        ROCK_IMG.classList.remove("grow");
    });

    PAPER_DIV.addEventListener("click", function () {
       game("paper");
    });

    PAPER_DIV.addEventListener("mousedown", function () {
        PAPER_IMG.classList.add("grow");
    });

    PAPER_DIV.addEventListener("mouseup",function () {
        PAPER_IMG.classList.remove("grow");
    });

    SCISSORS_DIV.addEventListener("click", function () {
        game("scissors");
    });

    SCISSORS_DIV.addEventListener("mousedown", function () {
        SCISSORS_IMG.classList.add("grow");
    });

    SCISSORS_DIV.addEventListener("mouseup",function () {
        SCISSORS_IMG.classList.remove("grow");
    });
}

function reset() {
    userScore.innerHTML = 0;
    compScore.innerHTML = 0;
}

main();