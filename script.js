// Carne - 400g por pessoas + de 6 horas - 650g
// Cerveja - 1200ml por pessoas + de 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoas + de 6 horas 1500ml

// Crianças valem por 0,5

var inputAdultos = document.getElementById("adultos");
var inputCriancas = document.getElementById("criancas");
var inputDuracao = document.getElementById("duracao");
var resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qntdCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qntdBovina = qntdCarne * 0.50;
    let qntdFrango = qntdCarne * 0.25;
    let qntdLinguica = qntdCarne * 0.25;

    let qntdCerveja = cervejaPP(duracao) * adultos;
    let qntdBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    mostrarResultado(qntdBovina, qntdFrango, qntdLinguica, qntdCerveja, qntdBebida)
}

function mostrarResultado(qntdBovina, qntdFrango, qntdLinguica, qntdCerveja, qntdBebida) {
    resultado.innerHTML = ``;

    resultado.innerHTML = formatarQntd(qntdBovina, `carne bovina`);
    resultado.innerHTML += formatarQntd(qntdFrango, `frango`);
    resultado.innerHTML += formatarQntd(qntdLinguica, `linguiça`);

    resultado.innerHTML += `<p>${Math.ceil(qntdCerveja / 355)} latinhas de cerveja (355ml)</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntdBebida / 2000)} garrafas de bebidas (2L)</p>`;

}

function carnePP(duracao) {
    if (duracao < 6) {
        return 400;
    } else {
        return 650;
    }
}

function cervejaPP() {
    if (duracao < 6) {
        return 1200;
    } else {
        return 2000;
    }
}

function bebidaPP() {
    if (duracao < 6) {
        return 1000;
    } else {
        return 1500;
    }
}

function formatarQntd(quantidade, tipo) {
    if (quantidade < 1000) {
        return `<p>${Math.round(quantidade)}g de ${tipo}`;
    } else {
        return `<p>${(quantidade / 1000).toFixed(1)}kg de ${tipo}`;
    }
}