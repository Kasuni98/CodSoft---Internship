let display = document.getElementById('display');
let expression = '';

//New lines

// Event listeners for number buttons
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

// Event listeners for operator buttons
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        operate(button.textContent);
    });
});

// Event listener for clear button
document.getElementById('clear').addEventListener('click', clearDisplay);

// Event listener for equals button
document.getElementById('equals').addEventListener('click', calculate);

//New lines End

function appendNumber(number) {
    expression += number;
    display.value = expression;
}

function operate(operator) {
    expression += operator;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculate() {
    try {
        let result = eval(expression);
        display.value = result;
        expression = '';
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}