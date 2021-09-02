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

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(`initial num : ${secretNumber}`);

let scoreValue = 20;

//note: eventlistner for Check button start========================
document.querySelector('.check').addEventListener('click', function () {
  //note: when ever we retrive anything from the user Interface it is of type string, thus changeing the type as per the requirement
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(guessNumber, typeof guessNumber);

  //when there is no input
  if (!guessNumber) {
    document.querySelector('.message').textContent = 'No number! 👀';
  }
  //when the player wins
  else if (guessNumber === secretNumber) {
    document.querySelector('.message').textContent =
      'Bulls eye 🐂, nailed it!!!';
    //displaying the correctnumber when the player wins
    document.querySelector('.number').textContent = secretNumber;

    //changing the background color of the screen when the player wins
    document.querySelector('body').style.backgroundColor = '#60b347';
    //increasing the width of the main number
    document.querySelector('.number').style.width = '30rem';
  }
  //when the input is higher than  the number
  else if (guessNumber > secretNumber) {
    if (scoreValue > 1) {
      document.querySelector('.message').textContent = 'Too High📈';
      scoreValue--;
      document.querySelector('.score').textContent = scoreValue;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
  //when the input is lower than the nnumber
  else if (guessNumber < secretNumber) {
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
//note: eventlistner for Check button end ^^^^^^^^^^^^^^^^^^^^^^^^^

//note: eventlistner for again button start========================
//task:
// -------- on click of again button following should happen---------
//     a) The background color of the screen should go back to the initial color : done
//     b) Correct number should dissaper and "?" should be there : done
//     c)reset the correct number message back to start guessing : done
//     d)reset score : done
//     e)empty out the input field : done
//     f) restore the width of the secretNumber element back to 15rem : done
//     g) new secrete number : done

document.querySelector('.again').addEventListener('click', function () {
  scoreValue = 20;
  document.querySelector('.score').textContent = scoreValue;
  console.log(scoreValue);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.guess').value = null;
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(`new num : ${secretNumber}`);
});
//note: eventlistner for again button end^^^^^^^^^^^^^^^^^^^^^^^^^^

console.log(secretNumber);
