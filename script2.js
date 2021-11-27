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
let gameScore = 20;
document.querySelector('.number').textContent = secretNumber;
//============ Check Button Event handler start======================
document.querySelector('.check').addEventListener('click', function () {
  // saving the input as a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //checking for various senarios for the input number
  //no INout given
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number Provided';
  } // input less than the secrete number
  else if (guess < secretNumber) {
    //checking score status
    if (gameScore > 1) {
      document.querySelector('.message').textContent = 'Too low 📉';
      //reducing score for wrong guess
      gameScore--;
      //updating new game score
      document.querySelector('.score').textContent = gameScore;
    } //Game lost condition
    else if (gameScore === 1) {
      document.querySelector('.message').textContent = 'You lost😒👎';
      document.querySelector('.score').textContent = 0;
    }
  } //input higher than the Secrete number
  else if (guess > secretNumber) {
    //checking game status
    if (gameScore > 1) {
      document.querySelector('.message').textContent = 'Too high 📈';
      //reducing score for wrong guess
      gameScore--;
      //updating new game score
      document.querySelector('.score').textContent = gameScore;
    } //game lost condition
    else if (gameScore === 1) {
      document.querySelector('.message').textContent = 'You lost😒👎';
      document.querySelector('.score').textContent = 0;
    }
  } //game won condition
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Bulls Eye🎯!!!';
  }
});
//============ Check Button Event handler end======================
