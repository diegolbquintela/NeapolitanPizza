'use strict';

const whiteFlour = document.querySelector('.ingredients-amount-0');
const whiteFlourImperial = document.querySelector('.ingredients-amount-00');

const yest = document.querySelector('.ingredients-amount-1');
const yestImperial = document.querySelector('.ingredients-amount-01');

const water = document.querySelector('.ingredients-amount-2');
const waterImperial = document.querySelector('.ingredients-amount-02');

const salt = document.querySelector('.ingredients-amount-3');
const saltImperial = document.querySelector('.ingredients-amount-03');

// const oliveOil = document.querySelector('.ingredients-amount-4');
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

  // Changing ingredients metric
  water.textContent = ((userServings * 1000) / 9).toFixed(1) + 'ml';
  whiteFlour.textContent = ((userServings * 1550) / 9).toFixed(1) + 'gr';
  yest.textContent = ((userServings * 2) / 9).toFixed(1) + 'gr';
  salt.textContent = ((userServings * 50) / 9).toFixed(1) + 'gr';

  // // Changing ingredients Imperial
  // waterImperial.textContent = ((userServings * 4.25) / 9).toFixed(1) + 'cups'; // convert decimal to fraction
  // whiteFlourImperial.textContent =
  //   ((userServings * 1550) / 9).toFixed(1) + 'gr';
  // yestImperial.textContent = ((userServings * 2) / 9).toFixed(1) + 'gr';
  // saltImperial.textContent = ((userServings * 50) / 9).toFixed(1) + 'gr';
});

// Recipe (serves 9) metric
// 1L Water environment temperature
// 50 gr salt
// 1gr yeast
// 1550gr white Flour

// Recipe (serves 9) Imperial
// 1L Water environment temperature
// 1550gr white Flour
// 1gr yeast
// 50 gr salt
