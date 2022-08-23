'use strict';
let randomNumber = Math.floor(Math.random() * 100 + 1);
let highscore = document.querySelector('.highscore');

let score = document.querySelector('.score');
let number = document.querySelector('.number');
function messageDisplay(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    messageDisplay('u need to guess a number');
  } else if (guess === randomNumber) {
    messageDisplay('u got it baby');
    number.textContent = randomNumber;
    //style
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score.textContent > highscore.textContent) {
      highscore.textContent = score.textContent;
    }
  } else if (guess !== randomNumber) {
    if (guess > randomNumber) {
      messageDisplay('to high');
    } else if (guess < randomNumber) {
      messageDisplay('to low');
    }
    score.textContent--;
  } else {
    messageDisplay('u lose the game');
    score.textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  messageDisplay('start guessing...');
  document.querySelector('.score').textContent = 100;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
