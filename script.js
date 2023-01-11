const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const newBtn = document.querySelector(".btn--new");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");
const dice = document.querySelector(".dice");

//hide the dice
dice.classList.add("hidden");

//setting all to 0
score0.textContent = 0;
score1.textContent = 0;
currentScore0.textContent = 0;
currentScore1.textContent = 0;

let currentScore = 0;
//Functions
//rolling the dice funtion
let num;
const rollDice = function () {
  dice.classList.remove("hidden");
  num = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${num}.png`; //adding img
  if (num === 1) {
    num = 0;
    currentScore = 0;
  } else {
    currentScore += num;
    currentScore0.textContent = currentScore;
  }
};

//Hold the dice function
const holdDice = function () {};

//adding EventListners
roll.addEventListener("click", rollDice);
hold.addEventListener("click", holdDice);
