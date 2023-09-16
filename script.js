var inputHomens = document.getElementById("homens");
var inputMulheres = document.getElementById("mulheres");
var inputCriancas = document.getElementById("criancas");
var inputDuracao = document.getElementById("duracao");
var resultado = document.getElementById("resultado");

function calcular() {
    let homens = inputHomens.value || 0;
    let mulheres = inputMulheres.value || 0;
    let criancas = inputCriancas.value || 0;
    let duracao = inputDuracao.value;

    if (duracao === `` || duracao === `0`) {
        alert(`A duração deve estar preenchida, e ser maior que 0!`);
        return;
    }

    let pessoas = parseInt(homens) + parseInt(mulheres) + parseInt(criancas);

    let qntdCarne = (carnePP(duracao) * homens) + (carnePP(duracao) * 0.75 * mulheres) + (carnePP(duracao) * 0.50 * criancas);
    let qntdBovina = qntdCarne * 0.45;
    let qntdFrango = qntdCarne * 0.35;
    let qntdLinguica = qntdCarne * 0.20;

    let qntdCerveja = ((cervejaPP(duracao) * homens) + (cervejaPP(duracao) * 0.75 * mulheres)) / 330;
    let qntdBebida = ((bebidaPP(duracao) * homens) + (bebidaPP(duracao) * 0.75 * mulheres) + (bebidaPP(duracao) * 0.50 * criancas)) / 2000;

    let qntdPaoDeAlho = (paoDeAlhoPP(duracao) * pessoas) / 5;

    let qntdQueijinho = queijinhoPP(duracao) * pessoas;

    let qntdCopos = pessoas * 4;
    let qntdCarvao = calcularCarvao(qntdCarne);

    mostrarResultado(qntdBovina, qntdFrango, qntdLinguica, qntdCerveja, qntdBebida, qntdPaoDeAlho, qntdQueijinho, pessoas, qntdCopos, qntdCarvao);
}

function mostrarResultado(qntdBovina, qntdFrango, qntdLinguica, qntdCerveja, qntdBebida, qntdPaoDeAlho, qntdQueijinho, pessoas, qntdCopos, qntdCarvao) {
    resultado.innerHTML = ``;

    resultado.innerHTML += `${qntdBovina > 1 ? formatarQntd(qntdBovina, `carne bovina`) : `<p>Nenhuma quantidade de carne bovina será necessária</p>`}`;
    resultado.innerHTML += `${qntdFrango > 1 ? formatarQntd(qntdFrango, `frango`) : `<p>Nenhuma quantidade de frango será necessária</p>`}`;
    resultado.innerHTML += `${qntdLinguica > 1 ? formatarQntd(qntdLinguica, `linguiça`) : `<p>Nenhuma quantidade de linguiça será necessária</p>`}`;

    resultado.innerHTML += `<p>${qntdPaoDeAlho > 1 ? `${Math.round(qntdPaoDeAlho)} pacotes de pão de alho` : `Nenhum pão de alho será necessário`}</p>`;
    resultado.innerHTML += `<p>${qntdQueijinho > 1 ? `${Math.round(qntdQueijinho)} espetinhos de queijo` : "Nenhum espetinho de queijo será necessário"}</p>`;

    resultado.innerHTML += `<p>${qntdCerveja > 1 ? `${Math.ceil(qntdCerveja)} latas de cerveja (330ml)` : `Nenhuma lata de cerveja será necessária`}</p>`;
    resultado.innerHTML += `<p>${qntdBebida > 1 ? `${Math.ceil(qntdBebida)} garrafas de bebidas (2L)` : `Nenhuma garrafa de bebida será necessária`}</p>`;

    resultado.innerHTML += `<p>${qntdCopos > 1 ? `${Math.ceil(qntdCopos / 100)} sacos de copos descartáveis` : `Nenhum copo descartável será necessário`}</p>`;
    resultado.innerHTML += `<p>${qntdCarvao > 1 ? `${Math.round(qntdCarvao)}kg de carvão` : `Nenhum kilo de carvão será necessário`} </p>`;

    resultado.innerHTML += `<p>Total de pessoas: ${(pessoas)}</p>`;
}

function carnePP(duracao) {
    let valor = 360;
    let adicionarExtra = Math.floor(duracao / 2) * 0.05;

    return valor * (1 + adicionarExtra);
}

function cervejaPP(duracao) {
    let valor = 950;
    let adicionarExtra = Math.floor(duracao / 2) * 0.02;

    return valor * (1 + adicionarExtra);

}

function bebidaPP(duracao) {
    let valor = 750;
    let adicionarExtra = Math.floor(duracao / 2) * 0.04;

    return valor * (1 + adicionarExtra);
}

function paoDeAlhoPP(duracao) {
    if (duracao < 6) {
        return 1;
    } else {
        return 2;
    }
}

function queijinhoPP(duracao) {
    if (duracao < 6) {
        return 1;
    } else {
        return 2;
    }
}


function calcularCarvao(qntdCarne) {
    let qntdCarneKg = qntdCarne / 1000;

    let carvaoPP = 5 / 6;

    let totalCarvao = qntdCarneKg * carvaoPP;

    return totalCarvao;
}

function formatarQntd(quantidade, tipo) {
    if (quantidade < 1000) {
        return `<p>${Math.round(quantidade)}g de ${tipo}`;
    } else {
        return `<p>${(quantidade / 1000).toFixed(1)}kg de ${tipo}`;
    }
}