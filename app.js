
choices = ["rock", "paper", "scissors"]
const winners = [];


function game() {



    for (let i = 0; i < 5; i++) {
        playRound(i);

    }
    logWins();
}


function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);

    logRound(playerSelection, computerSelection, winner, round);

    
}


function playerChoice() {
    input = prompt("What's your pick?");
    input = input.toLowerCase()
    return input;
}

function computerChoice(){
    randomIndex = choices[Math.floor(Math.random() * choices.length)]
    return randomIndex;
}

function checkWinner(choiceP, choiceC){
    if (choiceP === choiceC) {
        return "Tie"
    }else if (
        (choiceP === "rock" && choiceC == "scissors") ||
        (choiceP === "paper" && choiceC == "rock") ||
        (choiceP === "scissors" && choiceC == "paper")
    ) {
        return "Player"
    }else {
        return "Computer"
    }

}

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;

    console.log("Result: ");
    console.log("Player wins: ", playerWins);
    console.log("Computer wins: ", computerWins);
    console.log("Ties: ", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log("Round", round);
    console.log("Player chose:", playerChoice);
    console.log("Computer chose:", computerChoice);
    console.log(winner, "won the Round");
    console.log(".........................");
}


