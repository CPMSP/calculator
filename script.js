const container = document.querySelector('.container');

const expression = document.querySelector('.expression');
const output = document.querySelector('.output');

const firstFigure = document.querySelector('.firstFigure');
const secondFigure = document.querySelector('.secondFigure');
const sign = document.querySelector('.sign');

const clear = document.querySelector('#clear');
const calculate = document.querySelector('#equals');

const numbers = document.querySelectorAll('.numeral');
const operations = document.querySelectorAll('.operation');

let a = '';
let b = '';
let operation = '';
let outcome = '';

// function add(a, b) {
// 	return a + b;
// }

// function subtract(a, b) {
// 	return a - b;
// }

// function multiply(a, b) {
// 	return a * b;
// }

// function divide(a, b) {
// 	return a / b;
// }

function operate(operation, a, b) {
	if (operation === '+') {
		outcome = a + b;
	}
	if (operation === '-') {
		outcome = a - b;
	}
	if (operation === '*') {
		outcome = a * b;
	}
	if (operation === '/') {
		outcome = a / b;
	}
	output.textContent = outcome;
	operation = '';
}

numbers.forEach((number) => {
	number.addEventListener('click', (e) => {
		if (operation === '') {
			firstFigure.textContent += e.target.id;
			a = parseInt(firstFigure.textContent);
		}
		else {
			secondFigure.textContent += e.target.id;
			b = parseInt(secondFigure.textContent);
		}
	});
});

operations.forEach((operator) => {
	operator.addEventListener('click', (e) => {
		sign.textContent = e.target.id;
		operation = e.target.id;
		if (outcome !== '') {
			firstFigure.textContent = outcome;
			a = outcome;
		}
		// if (outcome === '') {
		// 	sign.textContent = e.target.id;
		// 	operation = e.target.id;
		// }
		// else {
		// 	firstFigure.textContent = outcome;
		// 	a = outcome;
		// 	sign.textContent = e.target.id;
		// 	operation = e.target.id;
		// }
	});
});

clear.addEventListener('click', () => {
	firstFigure.textContent = '';
	secondFigure.textContent = '';
	a = '';
	b = '';
	outcome = '';
	sign.textContent = '';
	operation = null;
	output.textContent = '';
});

calculate.addEventListener('click', () => {
	operate(operation, a, b);
	firstFigure.textContent = '';
	secondFigure.textContent = '';
	sign.textContent = '';
});
