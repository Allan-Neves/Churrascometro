// Carne - 400g por pessoas + de 6 horas - 650g
// Cerveja - 1200ml por pessoas + de 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoas + de 6 horas 1500ml

// Crianças valem por 0,5

var inputHomens = document.getElementById("homens");
var inputMulheres = document.getElementById("mulheres");
var inputCriancas = document.getElementById("criancas");
var inputDuracao = document.getElementById("duracao");
var resultado = document.getElementById("resultado");

function calcular() {
    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let pessoas = parseInt(homens) + parseInt(mulheres) + parseInt(criancas);

    let qntdCarne = (carnePP(duracao) * homens) + (carnePP(duracao) * 0.75 * mulheres) + (carnePP(duracao) * 0.50 * criancas);
    let qntdBovina = qntdCarne * 0.45;
    let qntdFrango = qntdCarne * 0.35;
    let qntdLinguica = qntdCarne * 0.20;

    let qntdCerveja = (cervejaPP(duracao) * homens) + (cervejaPP(duracao) * 0.75 * mulheres);
    let qntdBebida = (bebidaPP(duracao) * homens) + (bebidaPP(duracao) * 0.75 * mulheres) + (carnePP(duracao) * 0.50 * criancas);

    let qntdPaoDeAlho = paoDeAlhoPP(duracao) * pessoas;

    let qntdCopos = pessoas * 4;
    let qntdCarvao = calcularCarvao(qntdCarne);

    mostrarResultado(qntdBovina, qntdFrango, qntdLinguica, qntdCerveja, qntdBebida, qntdPaoDeAlho, pessoas, qntdCopos, qntdCarvao);
}

function mostrarResultado(qntdBovina, qntdFrango, qntdLinguica, qntdCerveja, qntdBebida, qntdPaoDeAlho, pessoas, qntdCopos, qntdCarvao) {
    resultado.innerHTML = ``;

    resultado.innerHTML = formatarQntd(qntdBovina, `carne bovina`);
    resultado.innerHTML += formatarQntd(qntdFrango, `frango`);
    resultado.innerHTML += formatarQntd(qntdLinguica, `linguiça`);

    resultado.innerHTML += `<p>${Math.round(qntdPaoDeAlho / 5)} pacotes de pão de alho</p>`;

    resultado.innerHTML += `<p>${Math.ceil(qntdCerveja / 330)} latas de cerveja (330ml)</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntdBebida / 2000)} garrafas de bebidas (2L)</p>`;

    resultado.innerHTML += `<p>${Math.ceil(qntdCopos / 100)} saco(s) de copos descartáveis</p>`;
    resultado.innerHTML += `<p>${Math.round(qntdCarvao)}kg de carvão</p>`;

    resultado.innerHTML += `<p>Total de pessoas: ${(pessoas)}</p>`;
}

function carnePP(duracao) {
    if (duracao < 6) {
        return 360;
    } else {
        return 700;
    }
}

function cervejaPP() {
    if (duracao < 6) {
        return 950;
    } else {
        return 1450;
    }
}

function bebidaPP() {
    if (duracao < 6) {
        return 850;
    } else {
        return 1300;
    }
}

function formatarQntd(quantidade, tipo) {
    if (quantidade < 1000) {
        return `<p>${Math.round(quantidade)}g de ${tipo}`;
    } else {
        return `<p>${(quantidade / 1000).toFixed(1)}kg de ${tipo}`;
    }
}

function paoDeAlhoPP(duracao) {
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