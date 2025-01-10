const faturamentos = [
    1800, 2500, 1200, 990, 2100, 2000, 1500, 3000, 2150, 1750,
    1800, 2500, 1200, 990, 2100, 2000, 1500, 3000, 2150, 1750,
    1800, 2500, 1200, 990, 2100, 2000, 1500, 3000, 2150, 1750,
]

function menorFaturamentoMes(array) {
    let menorValor = Math.min(...array);

    console.log("O menor faturamento do mês é: ", menorValor);
}

function maiorFaturamentoMes(array) {
    let maiorValor = Math.max(...array);

    console.log("O maior faturamento do mês é: ", maiorValor);
}

function mediaFaturamentoMes(array) {
    let soma = array.reduce((acc, curr) => acc + curr, 0)
    let media = soma / array.length;

    return media;
}

function qtdDiasDoMesFaturamentoSuperiorAMedia(array, media) {
    let qtd = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > media)
            qtd++;
    }

    return qtd;
}

console.log(`Menor faturamento do mês: ${menorFaturamentoMes(faturamentos)}`);
console.log(`Maior faturamento do mês: ${maiorFaturamentoMes(faturamentos)}`);
console.log(`Qtd de dias do mês com faturamento superior a média: ${qtdDiasDoMesFaturamentoSuperiorAMedia(faturamentos, mediaFaturamentoMes(faturamentos))}`);