// Problema 1 - Valor a pagar pela corrida
var prompt = require('prompt-sync')({ sigint: true });

let realfixo = 0;
let realkm = 0;

let horario = parseFloat(prompt("Digite o horário da corrida: "));

if (horario >= 0 && horario <= 6) {
    realfixo = 5.3;
    realkm = 4.4;
} else if (horario > 6 && horario <= 18) {
    realfixo = 3.3;
    realkm = 3.8;
} else {
    realfixo = 4.3;
    realkm = 4.1;
}

let distancia = parseFloat(prompt("Digite a quilometragem da corrida: "));
let corrida = realfixo + (realkm * distancia);

console.log("O valor a ser pago pelo cliente é de R$ " + corrida.toFixed(2));