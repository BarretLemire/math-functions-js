document.addEventListener('DOMContentLoaded', () => {

    function getInputValues() {
        const number1 = parseFloat(document.getElementById('number1').value) || 0;
        const number2 = parseFloat(document.getElementById('number2').value) || 0;
        return { number1, number2};
    }

    function displayResult(result) {
        document.getElementById('result').innerText = `Result: ${result}`;
    }

    window.calculate = function(operation) {
        const { number1, number2 } = getInputValues();
        let result;

        switch(operation) {
            case 'add':
                result = number1 + number2;
                break;
            case 'multiply':
                result = number1 * number2;
                break;
            case 'square':
                const result1 = number1 ** 2;
                const result2 = number2 ** 2;
                result = `Square of Number 1: ${result1}, Square of Number 2: ${result2}`;
                break;
            case 'addSquares':
                result = (number1 ** 2) + (number2 ** 2);
                break;
            case 'subtract': 
                result = number1 - number2;
                break;
            case 'divide':
                if (number2 !== 0) {
                    result = number1 / number2;
                } else {
                    result = "Cannot divide by zero";
                }
                break;
            default:
                result = "Unknown operation";
        }

        displayResult(result);
    }
});


