//votre code ici
function pairNumbers(min, max) {
    const pair = [];
    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            pair.push(i);
        }
    }

    return pair.join(",");
}

export default pairNumbers