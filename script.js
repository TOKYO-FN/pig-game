'use strict';

const score0EL = document.getElementById('score--0');
const score1EL = document.getElementById('score--1');
const diceEL = document.querySelector('dice');

console.log(diceEL);

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
