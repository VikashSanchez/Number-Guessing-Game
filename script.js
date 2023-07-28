'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🥳';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 30;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!🚫';
    displayMessage('No Number!🚫')

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!🥳';
    displayMessage('Correct Number!🥳')

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   // guess > secretNumber  
        //   //   ? 'Number is too High!👆'
        //   //   : 'Number is too Low!👇';
        displayMessage(guess > secretNumber
          ? 'Number is too High!👆'
          : 'Number is too Low!👇')
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = 'Game Over💔';
        displayMessage('Game Over💔')
        document.querySelector('.score').textContent = 0;

        document.querySelector('body').style.backgroundColor = '#ff0000';

        document.querySelector('.number').style.width = '30rem';
      }
    }
  }

//     // when player guesses number too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Number is too High!👆';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Game Over💔';
//       document.querySelector('.score').textContent = 0;

//       document.querySelector('body').style.backgroundColor = '#ff0000';

//       document.querySelector('.number').style.width = '30rem';
//     }

//     // When player guesses number too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Number is too Low!👇';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'Game Over💔';
//       document.querySelector('.score').textContent = 0;

//       document.querySelector('body').style.backgroundColor = '#ff0000';

//       document.querySelector('.number').style.width = '30rem';
//     }
//   }
// });

// const textbox = document.getElementById('guess');
// textbox.addEventListener('keypress', function onEvent(event) {
//   if (event.key === 'Enter') {
//     document.getElementById('btnCheck').click();
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing...')
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
