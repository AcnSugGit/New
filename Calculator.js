let display = document.getElementById('display');
let currentInput = '';
let resetNext = false;

function press(value) {
	if (resetNext) {
		currentInput = '';
		resetNext = false;
	}
	if (currentInput === '0' && value !== '.') {
		currentInput = value;
	} else {
		currentInput += value;
	}
	display.textContent = currentInput;
}

function calculate() {
	try {
		let result = eval(currentInput.replace(/÷/g, '/').replace(/×/g, '*'));
		display.textContent = result;
		currentInput = result.toString();
		resetNext = true;
	} catch {
		display.textContent = 'Error';
		currentInput = '';
		resetNext = true;
	}
}

function clearDisplay() {
	currentInput = '';
	display.textContent = '0';
}
