document.addEventListener('DOMContentLoaded', () => {
    function getInputValues() {
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        return { number1, number2};
    }

    function displayResult(result) {
        document.getElementById('result').innerText = `Result: ${result}`;
    }

    function addNumbers(number1, number2) {
        return number1 + number2;
    }

    function multiplyNumbers(number1, number2) {
        return number1 * number2;
    }

    function squareNumber(number) {
        return multiplyNumbers(number, number);
    }

    function squareNumbers(number1, number2) {
        const result1 = squareNumber(number1);
        const result2 = squareNumber(number2);
        return `Square of Number 1: ${result1}, Square of Number 2: ${result2}`;
    }

    function addSquares(number1, number2) {
        const squaredSum = addNumbers(squareNumber(number1), squareNumber(number2));
        return squaredSum;
    }

    window.calculate = function(operation) {
        const { number1, number2 } = getInputValues();
        let result;

        if (operation === 'add') {
            result = addNumbers(number1, number2);
        } else if (operation === 'multiply') {
            result = multiplyNumbers(number1, number2);
        } else if (operation === 'square') {
            result = squareNumbers(number1, number2);
        } else if (operation === 'addSquares') {
            result = addSquares(number1, number2);
        } else if (operation === 'subtract') {
            result = number1 - number2;
        } else if (operation === 'divide') {
            if (number2 !== 0) {
                result = number1 / number2;
            } else {
                result = "Cannot divide by zero";
            }
        } else {
            result = "Unknown operation";
        }

        displayResult(result);
    }
});