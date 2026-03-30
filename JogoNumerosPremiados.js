//  Jogo de Números Premiados
var prompt = require('prompt-sync')({ sigint: true });

let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let num3 = Math.floor(Math.random() * 100) + 1;

for (let tentativas = 1; tentativas <= 3; tentativas++) {
    let chute = parseInt(prompt("Tente adivinhar um dos números premiados entre 1 e 100: "));

    if (chute === num1 || chute === num2 || chute === num3) {
        console.log("Parabéns! Você acertou um dos números premiados!");
        break;
    } else {
        if (tentativas === 3) {
            console.log(`Que pena! Você não acertou. Os números eram: ${num1}, ${num2} e ${num3}`);
        } else {
            console.log(`Tente novamente! Você ainda tem ${3 - tentativas} tentativas.`);
        }
    }
}