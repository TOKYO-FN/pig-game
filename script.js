'use strict';

// Selecting Elemens
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--0');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, playing, activePlayer;

const init = function () {
  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
  playing = true;

  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;

  diceEL.classList.add('hidden');
  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};
init();

const switchPlayers = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // TODO Generate Random Number from 1 to 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // TODO Display dice roll
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    // TODO check for 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      scores[activePlayer] = 0;
      switchPlayers();
    }
  }
});

// Hold Functionality
btnHold.addEventListener('click', function () {
  scores[activePlayer] += currentScore;

  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    currentScore = 0;
    playing = false;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
  } else {
    switchPlayers();
  }
});

btnNew.addEventListener('click', init);
