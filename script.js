// Function roll the Dice, return a number between 1 thru 6
function rollTheDice() {
  return Math.ceil(Math.random() * 6);
}
//Function that return the addition of 2 numbers passed in parameters
function addTwoNumber(nb1, nb2) {
  return nb1 + nb2;
}
//Function that display something via the DOM
function displayOnPage(something, where) {
  where.firstChild.replaceWith(something);
}
//function to search the good icon to display
function iconSearch(array, dice) {
  return icons[dice - 1];
}
//function to display the right icon
function iconDisplay(icon) {
  iconPlace.setAttribute("class", icon);
}

//Variables declaration for Dom
let rollDice = document.getElementById("rollDice");
let newgame = document.getElementById("newGame");
let currentDisplayDice = document.getElementById("currentDice");
let iconPlace = document.querySelector("#icon");
//other variables declaration
let currentDice = 0;
let hold = 0;
let currentScore = 0;
let icons = [
  "bi bi-dice-1-fill",
  "bi bi-dice-2",
  "bi bi-dice-3",
  "bi bi-dice-4",
  "bi bi-dice-5",
  "bi bi-dice-6",
];

//Event listener to click 'roll the dice'
rollDice.addEventListener("click", () => {
  currentDice = rollTheDice();
  if (currentDice === 1) {
    currentScore = 0;
    displayOnPage(currentScore, currentDisplayDice);
    console.log(currentDice);
  } else {
    currentScore = addTwoNumber(currentDice, currentScore);
    displayOnPage(currentScore, currentDisplayDice);
    console.log(currentDice);
  }
  let icon = iconSearch(icons, currentDice);
  iconDisplay(icon);
});
//Event Listener to click 'new game'
newgame.addEventListener("click", () => {
  document.location.reload();
});
