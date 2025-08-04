const decimalInput = document.getElementById("decimalInput");
const binaryResult = document.getElementById("binaryResult");

function convertToBinary() {
    let decimalValue = parseInt(decimalInput.value);
    let binaryArray = [];

    if (!/^\d+$/.test(decimalInput.value)) {
        binaryResult.innerText = "";
        return;
    }

    while (decimalValue > 0) {
        let reste = decimalValue % 2;
        binaryArray.push(reste);
        
        decimalValue = Math.floor(decimalValue / 2);
    }

    binaryArray.reverse();
    let result = binaryArray.join("");
    binaryResult.innerText = result;
}