const frase = "Esteja presente em cada momento da sua vida, antes que estes momentos se tornem apenas lembranças."

function inverterString(str) {
    const arr = str.split('');
    let newStr = ''

    for (let i = 0; i < arr.length; i++) {
        newStr = arr[i] + newStr;
    }

    return newStr;
}

console.log("Frase invertida: " + inverterString(frase));