'use strict';

console.log('=== GAME DEVELOPMENT: GUESS MY NUMBER ===');

//DOM Element Selection
const messageEl = document.querySelector('.message');
console.log(messageEl);

//messageEl.textContent = 'Hello from JavaScript';

const scoreEl = document.querySelector('.score');
//scoreEl.textContent = 15;

const numberEl = document.querySelector('.number');
//numberEl.textContent = 10;

const highscoreEl = document.querySelector('.highscore');
//highscoreEl.textContent = 18;

const guessInputEl = document.querySelector('.guess');
//guessInputEl.value = 6;


//Game State variables
let secretNumber = Math.trunc(Math.random() * 20) + 1;

console.log('Your secret number is', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;


//////////////////////////////
//basic game logic

document.querySelector('.check').addEventListener('click', function() {
    console.log('Check button clicked!');
    const guess = Number(document.querySelector('.guess').value);
    console.log('Players guessed:', guess);

     if (!guess) {
        document.querySelector('.message').textContent = 'Please input a number!';
        return;
    }

    if (guess < 1 || guess > 20) {
        document.querySelector('.message').textContent =
        'Number must be between 1 and 20';
        return;
    }

   

    if (guess === secretNumber) {
        console.log('Correct guess!');
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
        document.querySelector('.message').textContent = 'You Won! Yay!';
        document.body.style.backgroundColor = 'green';
    } else if (guess > secretNumber) {
            console.log('Too High!');
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
            if (score < 1) {
                document.querySelector('.message').textContent = 'Aw, Game Over! Please press again :(';
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('.guess').disabled = true;
                document.querySelector('.check').disabled = true;
                document.body.style.backgroundColor = 'red';
                document.querySelector('.guess').value = '';
            }

    } else if (guess < secretNumber) {
            console.log('Too Low!');
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
            if (score < 1) {
                document.querySelector('.message').textContent = 'Game Over! Please press again :(';
                document.querySelector('.number').textContent = secretNumber;
                document.querySelector('.guess').disabled = true;
                document.querySelector('.check').disabled = true;
                document.body.style.backgroundColor = 'red';
                document.querySelector('.guess').value = '';
            }
        }
    });

    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        document.querySelector('.message').textContent = 'Start Guessing...';
        document.querySelector('.number').textContent =  '?';
        document.querySelector('.score').textContent =  score;
        document.querySelector('.guess').value =  '';
        document.querySelector('.guess').disabled =  false;
        document.querySelector('.check').disabled =  false;
        document.body.style.backgroundColor = '';
    });


