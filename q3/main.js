const fs = require('fs');

let faturamentos = []

try {
    // Lê o arquivo 'faturamento.json' de forma síncrona
    const dados = fs.readFileSync('q3/faturamentos.json', 'utf-8');
    const jsonData = JSON.parse(dados); // Converte o texto lido para um objeto JSON
    for (const chave in jsonData) {
        if (jsonData.hasOwnProperty(chave)) {
            let valor = jsonData[chave];
            faturamentos.push(valor)
        }
    }

} catch (erro) {
    console.error("Erro ao ler o arquivo JSON:", erro);
}

function menorFaturamentoMes(array) {
    let menorValor = Math.min(...array);

    return menorValor;
}

function maiorFaturamentoMes(array) {
    let maiorValor = Math.max(...array);

    return maiorValor;
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

console.log("O menor faturamento do mês é: ", menorFaturamentoMes(faturamentos));
console.log("O maior faturamento do mês é: ", maiorFaturamentoMes(faturamentos));
console.log(`Qtd de dias do mês com faturamento superior a média: ${qtdDiasDoMesFaturamentoSuperiorAMedia(faturamentos, mediaFaturamentoMes(faturamentos))}`);