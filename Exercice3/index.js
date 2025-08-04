// Créez votre fonction ici
function calculateAverage(array) {
    let total = 0;

    let result;

    if (!array) {
        result = "No numbers to calculate average";
    } else {
        for (let i = 0; i < array.length; i++) {
            total += array[i];  
        }

        result = total / array.length;
    }

    return result;
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
