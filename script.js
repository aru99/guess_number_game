'use strict';

// console.log(document.querySelector('.message').textContent);

// //note: here we are extracting the text content
// document.querySelector('.message').textContent = 'Correct Number 🎉';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //note: here we are reading the value from an input field thus using .value
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;
let scoreValue = 20;

//note: eventlistner for button click start
document.querySelector('.check').addEventListener('click', function () {
  //note: when ever we retrive anything from the user Interface it is of type string, thus changeing the type as per the requirement
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);

  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No number! 👀';
  } else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guessNumber > secretNumber) {
    if (scoreValue > 1) {
      document.querySelector('.message').textContent = 'Too High📈';
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guessNumber < secretNumber) {
    if (scoreValue > 1) {
      document.querySelector('.message').textContent = 'Too Low📉';
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});
