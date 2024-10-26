const addBtn = document.getElementById("addBtn");
const resetBtn = document.getElementById("resetBtn");
const diceBtn = document.getElementById("diceBtn");
const nextBtn = document.getElementById("nextBtn");
const action = document.getElementById("action");
const player = document.getElementById("player");
const diceResult = document.getElementById("result");
let num = 0;
let turnCounter = 0;

const whoDrinks = {
  0:  "Roll the Dice",
  1:  "Take a Shot",
  2:  "Choose one person to take a shot",
  3:  "The person next to you takes a shot",
  4:  "Everybody takes a shot",
  5:  "The first person to laugh takes two shots",
  6:  "Finish your drink"
}

const playersList = [];

addBtn.onclick = function(){
  playersList.push(window.prompt("What is your name?"));
  if(playersList[0] === 'player1') playersList/shift();
}

diceBtn.onclick = function(){
  num = Math.floor(Math.random() * 6) + 1;
  action.textContent = whoDrinks[num];
  diceResult.textContent = num;
}

nextBtn.onclick = function(){
  num = 0;
  action.textContent = whoDrinks[num];
  diceResult.textContent = num;
  player.textContent = playersList[turnCounter];
  turnCounter++;
  if(turnCounter === playersList.length) turnCounter = 0;
}

resetBtn.onclick = function(){
  playersList = ["Add player"];
}