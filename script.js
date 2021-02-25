const container = document.querySelector('.container');

const expression = document.querySelector('.expression');
const output = document.querySelector('.output');

const firstFigure = document.querySelector('.firstFigure');
const secondFigure = document.querySelector('.secondFigure');
const sign = document.querySelector('.sign');

const modifier = document.querySelector('#plusMinus');
const decimal = document.querySelector('#decimal');

const clear = document.querySelector('#clear');
const calculate = document.querySelector('#equals');

const numbers = document.querySelectorAll('.numeral');
const operations = document.querySelectorAll('.operation');

let a = '';
let b = '';
let operation = '';
let outcome = '';

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
		if (b === 0) {
			output.style.fontSize = '18px';
			outcome = 'Dividing by Zero Kills Machines';
			setTimeout(() => clearAll(), 1000);
		}
		else {
			outcome = a / b;
		}
	}
	output.textContent = outcome;
	firstFigure.textContent = '';
	secondFigure.textContent = '';
	sign.textContent = '';
}

numbers.forEach((number) => {
	number.addEventListener('click', (e) => {
		if (operation === '') {
			output.textContent = '';
			firstFigure.textContent += e.target.id;
			a = parseFloat(firstFigure.textContent);
		}
		else if (operation !== '') {
			secondFigure.textContent += e.target.id;
			b = parseFloat(secondFigure.textContent);
		}
	});
});

operations.forEach((operator) => {
	operator.addEventListener('click', (e) => {
		sign.textContent = e.target.id;
		operation = e.target.id;
		if (a === '') {
			firstFigure.textContent = outcome;
			a = outcome;
		}
		else if (a !== '' && b !== '' && operation !== '') {
			console.log(a);
			console.log(b);
			console.log(operation);
			operate(operation, a, b);
		}
	});
});

modifier.addEventListener('click', (value) => {
	return value * -1;
});

decimal.addEventListener('click', (e) => {
	if (operation === '' && outcome === '') {
		if (firstFigure.textContent.includes('.')) {
			return;
		}
		else {
			firstFigure.textContent += '.';
		}
	}
	else if (operation !== '') {
		if (secondFigure.textContent.includes('.')) {
			return;
		}
		else {
			secondFigure.textContent += '.';
		}
	}
});

function clearAll() {
	firstFigure.textContent = '';
	secondFigure.textContent = '';
	a = '';
	b = '';
	outcome = '';
	sign.textContent = '';
	operation = '';
	output.textContent = '';
	output.style.fontSize = '';
}

clear.addEventListener('click', clearAll);

function calc() {
	operate(operation, a, b);
	operation = '';
	a = '';
	b = '';
}

calculate.addEventListener('click', calc);
