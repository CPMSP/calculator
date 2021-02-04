const container = document.querySelector('.container');

const output = document.querySelector('.output');

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

const operate = (operator, a, b) => {
	return operator(a, b);
};
