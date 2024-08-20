'use strict';

// Selecting Elemens
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--0');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // TODO Generate Random Number from 1 to 6
  const dice = Math.trunc(Math.random() * 6) + 1;

  // TODO Display dice roll
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  // TODO check for 1
  if (dice !== 1) {
    currentScore += dice;
    current0EL.textContent = currentScore;
  } else {
    currentScore = 0;
    current0EL.textContent = currentScore;
  }
});
