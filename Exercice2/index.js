// Créez votre fonction ici
function calculate(num1, num2, operator) {
    let result;

    if (operator === "+") {
        result = num1 + num2;

    } else if (operator === "-") {
        result = num1 - num2;

    } else if (operator === "*") {
        result = num1 * num2;

    } else if (num2 === 0 && operator === "/") {
        result = "Division by zero is not allowed";

    } else if (operator === "/") {
        result = num1 / num2;
        
    } else if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        result = "Invalid operator";
    }

    return result;
}
// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
