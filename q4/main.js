const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}

function totalFaturameto(faturamentos) {
    let total = 0;

    for (const chave in faturamentos) {
        if (faturamentos.hasOwnProperty(chave)) {
            const valor = faturamentos[chave];
            total = total + valor;
        }
    }

    return total;
}

function percentualPorEstado(faturamentos) {
    let total = totalFaturameto(faturamentos);
    let percentuais = {}

    for (const chave in faturamentos) {
        if (faturamentos.hasOwnProperty(chave)) {
            const valor = faturamentos[chave];
            const percentual = valor * 100 / total;
            percentuais[chave] = percentual;
        }
    }

    return percentuais;
}

console.log(percentualPorEstado(faturamentoPorEstado))