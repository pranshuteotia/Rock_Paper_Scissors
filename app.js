let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let funRuined = false;
let choice = "";
const ROCK_DIV = document.querySelector("#rock");
const ROCK_IMG = document.querySelector("#rock > img");
const PAPER_IMG = document.querySelector("#paper > img");
const SCISSORS_IMG = document.querySelector("#scissors > img");
const PAPER_DIV = document.querySelector("#paper");
const SCISSORS_DIV = document.querySelector("#scissors");
const MESSAGE_DIV = document.querySelector("#message");
const HIDDEN_BTN = document.querySelector("#getChoice");

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
    const msg = `${userChoice.toUpperCase()} loses to ${computerChoice.toUpperCase()}. You Lose!`;
    MESSAGE_DIV.innerHTML = msg;
    compScore.innerHTML++;
}

function draw(userChoice, computerChoice) {
    const msg = `${userChoice.toUpperCase()} equals ${computerChoice.toUpperCase()}. Round Draw!`;
    MESSAGE_DIV.innerHTML = msg;
}

function game(userChoice, compChoice="") {
    const computerChoice = getComputerChoice();

    if(compChoice === "") {
        switch (userChoice + computerChoice) {
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
    } else {
        switch (userChoice + compChoice) {
            case "rockscissors":
            case "paperrock":
            case "scissorspaper":
                win(userChoice, compChoice);
                break;

            case "rockpaper":
            case "paperscissors":
            case "scissorsrock":
                lose(userChoice, compChoice);
                break;

            default:
                draw(userChoice, compChoice);
                break;
        }

    }
}

function main() {
    ROCK_DIV.addEventListener("click", function () {

        if(funRuined === false) {
            game("rock");
        } else {
            game("rock", choice);
        }
    });

    ROCK_DIV.addEventListener("mousedown", function () {
       ROCK_IMG.classList.add("grow");
    });

    ROCK_DIV.addEventListener("mouseup",function () {
        ROCK_IMG.classList.remove("grow");
    });

    PAPER_DIV.addEventListener("click", function () {
        if(funRuined === false) {
            game("paper");
        } else {
            game("paper", choice);
        }
    });

    PAPER_DIV.addEventListener("mousedown", function () {
        PAPER_IMG.classList.add("grow");
    });

    PAPER_DIV.addEventListener("mouseup",function () {
        PAPER_IMG.classList.remove("grow");
    });

    SCISSORS_DIV.addEventListener("click", function () {
        if(funRuined === false) {
            game("scissors");
        } else {
            game("scissors", choice);
        }
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

function ruinTheFun() {
    funRuined = true;
    HIDDEN_BTN.classList.remove("hide");
    HIDDEN_BTN.classList.add("show");
}

function getChoice() {
    const compChoice = getComputerChoice();
    choice = compChoice;
    MESSAGE_DIV.innerHTML = `The computer will select ${compChoice}.`;
}
main();