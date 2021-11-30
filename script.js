function rollTheDice() {
  return Math.ceil(Math.random() * 6);
}
function displayCurrentDice(currentDice) {
  currentDisplayDice.append(currentDice);
}
const diceItem = [
  'class="bi bi-dice-1-fill"',
  'class="bi bi-dice-2"',
  'class="bi bi-dice-3"',
  'class="bi bi-dice-4"',
  'class="bi bi-dice-5"',
  'class="bi bi-dice-6"',
];
var rollDice = document.getElementById("rollDice");
var newgame = document.getElementById("newGame");
var currentDisplayDice = document.getElementById("currentDice");
var currentDice = 0;
currentDisplayDice.append(diceItem[currentDice]);
rollDice.addEventListener("click", () => {
  currentDice = rollTheDice();
  console.log(currentDice);
  displayCurrentDice(currentDice);
});
//Fonction de recommencé une partie gràce au link 'NEW GAME'
newgame.addEventListener("click", () => {
  document.location.reload();
});
