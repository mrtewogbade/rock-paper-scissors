

choices = ["rock", "paper", "scissors"]
const winners = [];

function resetGame() {
    winners = [];
    document.querySelector('.playerScore').textContent = 'Score: 0';
    document.querySelector('.computerScore').textContent = 'Score: 0';
    document.querySelector('.ties').textContent = 'Ties: 0';
    document.querySelector('.winner').textContent = '';
    document.querySelector('.playerChoice').textContent = '';
    document.querySelector('.computerChoice').textContent = '';
    document.querySelector('.reset').style.display = 'none';
}     

function startGame() {

    //play the game until someone wins 5 rounds

    let imgs = document.querySelectorAll('img');
    imgs.forEach((img) => 
    img.addEventListener(('click'), () => {
        if(img.id) {
            playRound(img.id);
        }
    } ))

}

function playRound(playerChoice) {

    let wins = checkWins();
    if (wins >= 5) {
        return 
    }


    const computerChoice = computerSelect();
    const winner = checkWinner(playerChoice, computerChoice);
    winners.push(winner);

    tallyWins();
    displayRound(playerChoice, computerChoice, winner);
    wins = checkWins();

    if (wins == 5) {
        //display end result
        //change the button to visible
        //change the text to display winner

        displayEnd()
    }
}

function displayEnd() {
    let playerWins = winners.filter((item) => item == "Player").length;

    if (playerWins == 5) {
        document.querySelector('.winner').textContent = `You won 5 Games, Congrats!`;
    } else {
        document.querySelector('.winner').textContent = `Sorry, the Computer won 5 times! Commiserations!`;
    }
    document.querySelector('.reset').style.display = 'flex';
}

function displayRound(playerChoice, computerChoice, winner) {
    document.querySelector('.playerChoice').textContent = `You Chose: ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`;

    document.querySelector('.computerChoice').textContent = `Computer Chose: ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`;
    document.querySelector('.winner').textContent = `Round Winner: ${winner}`;

}

function displayRoundWinner(winner) {
    if (winner == 'Player') {
        document.querySelector('.winner').textContent = "You won the Round!";
    }else if (winner == 'Computer') {
        document.querySelector('.winner').textContent = "Computer won the Round";
    }else{
        document.querySelector('.winner').textContent = "It's a Tie!";
    }
}


function tallyWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    const ties = winners.filter((item) => item == "Tie").length;
    
    document.querySelector('.playerScore').textContent = `Score: ${pWinCount}`;
    document.querySelector('.computerScore').textContent = `Score: ${cWinCount}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function checkWins() {
    const pWinCount = winners.filter((item) => item == "Player").length;
    const cWinCount = winners.filter((item) => item == "Computer").length;
    
    return Math.max(pWinCount, cWinCount);
}


function computerSelect(){

    //update the DOM with the computer selection

    const choice = choices[Math.floor(Math.random() * choices.length)]

    // document.querySelector(`.${choice}`).classList.add('active');

    // setTimeout(() => {
    //    document.querySelector(`.${choice}`).classList.remove('active');

    // }, 700);

    return choice;
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

function setWins() {
    let pWinCount = winners.filter((item) => item == "Player").length;
    let cWinCount = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
}


startGame();