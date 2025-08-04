const input = document.getElementById("display");

function appendToDisplay(element) {
    input.value += element;
}

function calculateResult() {
    const operators = ["+", "-", "*", "/"];
    const expression = input.value;
    
    for (let i = 0; i < operators.length; i++) {
        if (expression.includes(operators[i])) {
            const parts = expression.split(operators[i]);
            const num1 = Number(parts[0]);
            const num2 = Number(parts[1]);
            
            if (operators[i] === "+") {
                input.value = num1 + num2;
                return;
            }
            if (operators[i] === "-") {
                input.value = num1 - num2;
                return;
            }
            if (operators[i] === "*") {
                input.value = num1 * num2;
                return;
            }
            if (operators[i] === "/") {
                if (num2 === 0) {
                    input.value = "Division by zero is not allowed";
                    return;
                }
                input.value = num1 / num2;
                return;
            }
        }
    }
    
    input.value = "Error";
}

function clearDisplay() {
    input.value = "";
}