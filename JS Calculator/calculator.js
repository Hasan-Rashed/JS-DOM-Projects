// receiving the number and sign from the calculator
function myCalculator(buttonText){
    document.getElementById('calculator-input').value += buttonText; // plus is for taking previous value and adding the new value
}

// calculation or for equal sign
document.getElementById('totalCalculation').addEventListener('click', () => {
    const result = document.getElementById('calculator-input').value;
    document.getElementById('calculator-input').value = eval(result);
});

// all clear
document.getElementById('allClearBtn').addEventListener('click', () => {
    document.getElementById('calculator-input').value = '';
});

// clear last
document.getElementById('clearLastBtn').addEventListener('click', () => {
    const value = document.getElementById('calculator-input').value;
    const deleteLastIndex = value.substring(0, value.length - 1);
    document.getElementById('calculator-input').value = deleteLastIndex;
});

// log
document.getElementById('logBtn').addEventListener('click', () => {
    document.getElementById('calculator-input').value = Math.log(document.getElementById('calculator-input').value);
});

// powerTwo
function powerTwoCalculator(powerValue){
    const value = document.getElementById('calculator-input').value;
    document.getElementById('calculator-input').value = Math.pow(value, powerValue);
}

// root
document.getElementById('rootBtn').addEventListener('click', () => {
    const value = document.getElementById('calculator-input').value;
    document.getElementById('calculator-input').value = Math.sqrt(value);
});

// pi
document.getElementById('piBtn').addEventListener('click', () => {
    document.getElementById('calculator-input').value = Math.PI;
});

// sin
document.getElementById('sinBtn').addEventListener('click', () => {
    const value = document.getElementById('calculator-input').value;
    document.getElementById('calculator-input').value = Math.sin(value);
});

// cos
document.getElementById('cosBtn').addEventListener('click', () => {
    const value = document.getElementById('calculator-input').value;
    document.getElementById('calculator-input').value = Math.cos(value);
});

// tan
document.getElementById('tanBtn').addEventListener('click', () => {
    const value = document.getElementById('calculator-input').value;
    document.getElementById('calculator-input').value = Math.tan(value);
});