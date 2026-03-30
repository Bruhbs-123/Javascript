// Simulação de Semáforo
var prompt = require('prompt-sync')({ sigint: true });
var cor = prompt("Escolha uma cor (verde, amarelo ou vermelho): ");

switch (cor.toLowerCase()) {
    case "verde":
        console.log("Siga!");
        break;
    case "amarelo":
        console.log("Atenção!");
        break;
    case "vermelho":
        console.log("Pare!");
        break;
    default:
        console.log("Cor inválida! Escolha entre verde, amarelo ou vermelho.");
}