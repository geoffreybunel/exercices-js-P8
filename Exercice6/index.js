const input = document.getElementById("display");

function appendToDisplay(element) {
    input.value += element;
}

function calculateResult() {
    const result = eval(input.value);

    input.value = result;
}

function clearDisplay() {
    input.value = "";
}