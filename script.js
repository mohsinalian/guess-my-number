'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const backgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('⛔not a number');
  } else if (guess === secretNumber) {
    displayMessage('🎉correct number!');

    document.querySelector('.number').textContent = secretNumber;
    backgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈Too high' : '📉Too low');
    score--;
    displayScore(score);
  } else {
    displayMessage('💥You lose the game');
    displayScore('0');
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  displayScore(score);
  displayMessage('Start guessing...');
  backgroundColor('#222');
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
