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
//function to change player
function changePlayer(playerTochange) {
  playerTochange.player.setAttribute(
    "class",
    "bi bi-brightness-low text-danger"
  );
  if (playerTochange === player1) {
    playerTochange = player2;
    playerTochange.player.setAttribute(
      "class",
      "bi bi-brightness-high-fill text-success"
    );
    return playerTochange;
  } else {
    playerTochange = player1;
    playerTochange.player.setAttribute(
      "class",
      "bi bi-brightness-high-fill text-success"
    );
    return playerTochange;
  }
}
//function to search the good icon to display
function iconSearch(array, dice) {
  return icons[dice - 1];
}
//function to display the right icon
function iconDisplay(icon) {
  iconPlace.setAttribute("class", icon);
}
//function test end of game?
function endOfGame(score, limit) {
  if (score >= limit) {
    alert(
      `Le score dépasse ${limit} : \nFIN DE LA PARTIE!\nLe ${currentPlayer.name} gagne la partie!!`
    );
    document.location.reload();
  }
}
//Variables declaration for Dom
let currentPlayer1 = document.querySelector("#player1");
let currentDisplayDice1 = document.getElementById("currentDice1");
let currentPlayerScore1 = document.getElementById("currentScore1");

let currentPlayer2 = document.querySelector("#player2");
let currentDisplayDice2 = document.getElementById("currentDice2");
let currentPlayerScore2 = document.getElementById("currentScore2");

let rollDice = document.getElementById("rollDice");
let newgame = document.getElementById("newGame");
let iconPlace = document.querySelector("#icon");
let hold = document.getElementById("hold");

//Players array
let player1 = {
  name: "Joueur 1",
  player: currentPlayer1,
  current: currentDisplayDice1,
  score: currentPlayerScore1,
  currentScorePlayer: 0,
};

let player2 = {
  name: "Joueur 2",
  player: currentPlayer2,
  current: currentDisplayDice2,
  score: currentPlayerScore2,
  currentScorePlayer: 0,
};

//other variables declaration
let currentPlayer = player1;
let currentDice = 0;
let saveScore = 0;
let currentScore = 0;
let endGame = 100;
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
    displayOnPage(currentScore, currentPlayer.current);
    console.log(currentDice);
    currentScore = 0;
    currentPlayer = changePlayer(currentPlayer);
    saveScore = currentPlayer.currentScorePlayer;
  } else {
    currentScore = addTwoNumber(currentDice, currentScore);
    displayOnPage(currentScore, currentPlayer.current);
    console.log(currentDice);
  }
  let icon = iconSearch(icons, currentDice);
  iconDisplay(icon);
});
//Event listener to click 'hold'
hold.addEventListener("click", () => {
  saveScore = addTwoNumber(saveScore, currentScore);
  currentPlayer.currentScorePlayer = saveScore;
  endOfGame(saveScore, endGame);
  displayOnPage(saveScore, currentPlayer.score);
  currentScore = 0;
  displayOnPage(currentScore, currentPlayer.current);
  currentPlayer = changePlayer(currentPlayer);
  saveScore = currentPlayer.currentScorePlayer;
});
//Event Listener to click 'new game'
newgame.addEventListener("click", () => {
  document.location.reload();
});
