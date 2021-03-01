const container = document.querySelector('.container');

const expression = document.querySelector('.expression');
const output = document.querySelector('.output');

const firstFigure = document.querySelector('.firstFigure');
const secondFigure = document.querySelector('.secondFigure');
const sign = document.querySelector('.sign');

const modifier = document.querySelector('#plusMinus');
const decimal = document.querySelector('#decimal');
const percent = document.querySelector('#percent');

const clear = document.querySelector('#clear');
const back = document.querySelector('#back');

const calculate = document.querySelector('#equals');

const numbers = document.querySelectorAll('.numeral');
const operations = document.querySelectorAll('.operation');

let a = '';
let b = '';
let operation = '';
let outcome = '';

window.addEventListener('keydown', keyInput);

numbers.forEach((number) => {
	number.addEventListener('click', (number) => numberInput(number));
});

operations.forEach((operator) => {
	operator.addEventListener('click', (operator) => setOperation(operator));
});

modifier.addEventListener('click', () => setModifier());
decimal.addEventListener('click', () => placeDecimal());
percent.addEventListener('click', () => makePercent());
back.addEventListener('click', () => backspace());
clear.addEventListener('click', clearAll);
calculate.addEventListener('click', calc);

function keyInput(e) {
	// if (e.key >= 0 && e.key <= 9) numberInput(e.key);
	// if (e.key === '/' || e.key === '*' || e.key === '-' || e.key === '+')
	// 	setOperation(e.key);
	// if (e.key === 'PageUp') setModifier();
	// if (e.key === '.') placeDecimal();
	// if (e.key === 'PageDown') makePercent();
	// if (e.key === 'Delete' || e.key === 'Backspace') backspace();
	// if (e.key === 'Escape') clearAll();
	// if (e.key === 'Enter' || e.key === '=') calc();
	console.log(e.key);
}

function operate(operation, a, b) {
	if (!b) {
		outcome = a;
	}
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

function numberInput(e) {
	if (operation === '') {
		output.textContent = '';
		firstFigure.textContent += e.target.id;
		a = parseFloat(firstFigure.textContent);
	}
	else if (operation !== '') {
		secondFigure.textContent += e.target.id;
		b = parseFloat(secondFigure.textContent);
	}
}

function setOperation(e) {
	if (a === '' && outcome !== '') {
		firstFigure.textContent = outcome;
		a = parseFloat(outcome);
	}
	else if (a !== '' && b !== '' && operation !== '') {
		operate(operation, a, b);
		a = outcome;
		firstFigure.textContent = outcome;
		sign.textContent = operation;
	}
	sign.textContent = e.target.id;
	operation = e.target.id;
}

function setModifier() {
	if (operation === '') {
		firstFigure.textContent = firstFigure.textContent * -1;
		a = parseFloat(firstFigure.textContent);
	}
	else if (operation !== '') {
		secondFigure.textContent = secondFigure.textContent * -1;
		b = parseFloat(secondFigure.textContent);
	}
}

function placeDecimal() {
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
}

function makePercent() {
	if (operation === '') {
		firstFigure.textContent = firstFigure.textContent * 0.01;
		a = parseFloat(firstFigure.textContent);
	}
	else if (operation !== '') {
		secondFigure.textContent = secondFigure.textContent * 0.01;
		b = parseFloat(secondFigure.textContent);
	}
}

function backspace() {
	if (operation === '') {
		firstFigure.textContent = Array.from(
			firstFigure.textContent.slice(0, -1)
		).join('');
		a = parseFloat(firstFigure.textContent);
	}
	else if (operation !== '') {
		secondFigure.textContent = Array.from(
			secondFigure.textContent.slice(0, -1)
		).join('');
		b = parseFloat(secondFigure.textContent);
	}
}

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

function calc() {
	operate(operation, a, b);
	operation = '';
	a = '';
	b = '';
}
