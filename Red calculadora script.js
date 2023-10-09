let expresion = "";

function agregar_numero (number) {
	expresion += number;
	updateDisplay();
}

function agregar_expresion(operator) {
	expresion += operator;
	updateDisplay();
}

function calcular() {
	try {
		const result = eval(expresion);
		expresion = result.toString();
		updateDisplay();
	} catch (error) {
		expresion = '';
		updateDisplay();
		alert('error en la expresion')
	}
}


function a_cero() {
	expresion = '';
	updateDisplay();
}

function updateDisplay() {
	document.getElementById('input').value = expresion;
}