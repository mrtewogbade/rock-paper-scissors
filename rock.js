// To create a function called getComputerChoice that randomly returns one of the strings 'Rock', 'Paper', or 'Scissors', you can use the Math.random function and some basic branching:



function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  console.log(getComputerChoice());