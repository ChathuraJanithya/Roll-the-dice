const score = document.querySelector(".score");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const currentScore = document.querySelector(".current-score");
score.textContent = 0;
currentScore.textContent = 0;
let num;
const rollDice = function () {
  num = Math.floor(Math.random() * 6) + 1;
  if (num === 1) num = 0;
  else {
    score.textContent = num;
  }
};

const holdDice = function () {
  if (currentScore <= 100) {
    currentScore.textContent = currentScore + score;
  }
};

roll.addEventListener("click", rollDice);
hold.addEventListener("click", holdDice);
