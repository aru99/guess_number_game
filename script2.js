'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number 🎉';

document.querySelector('.number').textContent = 11;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//-------defining variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let highScore = 0;

//------defining functions
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.number').textContent = secretNumber;

//============ Check Button Event handler start======================
document.querySelector('.check').addEventListener('click', function () {
  // saving the input as a number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //checking for various senarios for the input number
  //no INout given
  if (!guess) {
    displayMessage('⛔ No Number Provided');
  }
  //unifying different conditions
  else if (guess != secretNumber) {
    //checking score status
    if (gameScore > 1) {
      displayMessage(guess < secretNumber ? 'Too low 📉' : 'Too high 📈');
      //reducing score for wrong guess
      gameScore--;
      //updating new game score
      document.querySelector('.score').textContent = gameScore;
    } //Game lost condition
    else if (gameScore === 1) {
      displayMessage('You lost😒👎');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // input less than the secrete number
  //   else if (guess < secretNumber) {
  //     //checking score status
  //     if (gameScore > 1) {
  //       document.querySelector('.message').textContent = 'Too low 📉';
  //       //reducing score for wrong guess
  //       gameScore--;
  //       //updating new game score
  //       document.querySelector('.score').textContent = gameScore;
  //     } //Game lost condition
  //     else if (gameScore === 1) {
  //       document.querySelector('.message').textContent = 'You lost😒👎';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } //input higher than the Secrete number
  //   else if (guess > secretNumber) {
  //     //checking game status
  //     if (gameScore > 1) {
  //       document.querySelector('.message').textContent = 'Too high 📈';
  //       //reducing score for wrong guess
  //       gameScore--;
  //       //updating new game score
  //       document.querySelector('.score').textContent = gameScore;
  //     } //game lost condition
  //     else if (gameScore === 1) {
  //       document.querySelector('.message').textContent = 'You lost😒👎';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } //Player wins
  else if (guess === secretNumber) {
    displayMessage('Bulls Eye🎯!!!');

    //changing the background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    //changing the width
    document.querySelector('.number').style.width = '30rem';

    //highsore functionality
    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});
//============ Check Button Event handler end======================

//============ Again Button Event handler start======================
/* todo: on click :
 --start guessing message 
 -- score value reset to 20
 -- empty input field 
 -- width reset if game won 
 -- background color reset if game won
 -- reset secrete number 
*/
document.querySelector('.again').addEventListener('click', function () {
  gameScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = gameScore;
  document.querySelector('.number').textContent = secretNumber;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});

//============ Again Button Event handler end======================
