'use strict';

const whiteFlour = document.querySelector('.ingredients-amount-0');
const yest = document.querySelector('.ingredients-amount-1');
const water = document.querySelector('.ingredients-amount-2');
const salt = document.querySelector('.ingredients-amount-3');
// const oliveOil = document.querySelector('.ingredients-amount-4');
const servings = document.querySelector('#number-servings');
const submit = document.querySelector('.submit');

whiteFlour.textContent = '';
yest.textContent = '';
water.textContent = '';
salt.textContent = '';
// oliveOil.textContent = '';

// CALCULATING QUANTITIES ON SUBMIT BUTTOM
submit.addEventListener('click', function () {
  // Getting the Value typed by user
  const userServings = servings.value;

  // Changing ingredients
  water.textContent = ((userServings * 500) / 6).toFixed(1) + 'ml';
  whiteFlour.textContent = ((userServings * 800) / 6).toFixed(1) + 'gr';
  yest.textContent = ((userServings * 3) / 6).toFixed(1) + 'gr';
  salt.textContent = ((userServings * 25) / 6).toFixed(1) + 'gr';
});
