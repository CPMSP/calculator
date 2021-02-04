const container = document.querySelector('.container');

const output = document.querySelector('.output');

const buttons = document.querySelectorAll('button');

let a = '';
let b = '';

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

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		if (Number.isInteger(button.id)) {
			output.textContent += button.id;
			a = output.textContent;
		}
		else if (button.id === 'clear') {
			output.textContent = '';
		}
		else if (
			button.id ===
			[
				'+',
				'-',
				'*',
				'/'
			]
		) {
		}
	});
});
