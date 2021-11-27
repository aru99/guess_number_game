'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number 🎉';

document.querySelector('.number').textContent = 11;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//defining variables
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
//============ Check Button Event handler start======================
document.querySelector('.check').addEventListener('click', function () {
  // saving the input as a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //checking for various senarios for the input number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number Provided';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low 📉';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high 📉';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Bulls Eye🎯!!!';
  }
});
//============ Check Button Event handler end======================
