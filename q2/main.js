const prompt = require("prompt-sync")();

function isFibonacci(num) {
    if (num < 0) return false;

    let fib1 = 0, fib2 = 1;
    
    if (num === 0 || num === 1) return true;

    while (fib2 < num) {
        let temp = fib2;
        fib2 = fib1 + fib2;
        fib1 = temp;
    }

    return fib2 === num;
}

let numero = prompt("Informe um número:");
numero = parseInt(numero);

if (isFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
