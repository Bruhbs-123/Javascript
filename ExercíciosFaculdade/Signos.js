var prompt = require('prompt-sync')({ sigint: true });

let mes = prompt("Digite o mês: ").toLowerCase();
let dia = parseInt(prompt("Digite o dia: "));

switch (mes) {
    case "janeiro":
        if (dia >= 1 && dia <= 19) {
            console.log("Você é do signo de Capricórnio");
        } else if (dia >= 20 && dia <= 31) {
            console.log("Você é do signo de Aquário");
        }
        break;

    case "fevereiro":
        if (dia >= 1 && dia <= 18) {
            console.log("Você é do signo de Aquário");
        } else if (dia >= 19 && dia <= 29) {
            console.log("Você é do signo de Peixes");
        }
        break;

    case "março":
    case "marco":
        if (dia >= 1 && dia <= 20) {
            console.log("Você é do signo de Peixes");
        } else if (dia >= 21 && dia <= 31) {
            console.log("Você é do signo de Áries");
        }
        break;

    case "abril":
        if (dia >= 1 && dia <= 19) {
            console.log("Você é do signo de Áries");
        } else if (dia >= 20 && dia <= 30) {
            console.log("Você é do signo de Touro");
        }
        break;

    case "maio":
        if (dia >= 1 && dia <= 20) {
            console.log("Você é do signo de Touro");
        } else if (dia >= 21 && dia <= 31) {
            console.log("Você é do signo de Gêmeos");
        }
        break;

    case "junho":
        if (dia >= 1 && dia <= 20) {
            console.log("Você é do signo de Gêmeos");
        } else if (dia >= 21 && dia <= 30) {
            console.log("Você é do signo de Câncer");
        }
        break;

    case "julho":
        if (dia >= 1 && dia <= 22) {
            console.log("Você é do signo de Câncer");
        } else if (dia >= 23 && dia <= 31) {
            console.log("Você é do signo de Leão");
        }
        break;

    case "agosto":
        if (dia >= 1 && dia <= 22) {
            console.log("Você é do signo de Leão");
        } else if (dia >= 23 && dia <= 31) {
            console.log("Você é do signo de Virgem");
        }
        break;

    case "setembro":
        if (dia >= 1 && dia <= 22) {
            console.log("Você é do signo de Virgem");
        } else if (dia >= 23 && dia <= 30) {
            console.log("Você é do signo de Libra");
        }
        break;

    case "outubro":
        if (dia >= 1 && dia <= 22) {
            console.log("Você é do signo de Libra");
        } else if (dia >= 23 && dia <= 31) {
            console.log("Você é do signo de Escorpião");
        }
        break;

    case "novembro":
        if (dia >= 1 && dia <= 21) {
            console.log("Você é do signo de Escorpião");
        } else if (dia >= 22 && dia <= 30) {
            console.log("Você é do signo de Sagitário");
        }
        break;

    case "dezembro":
        if (dia >= 1 && dia <= 21) {
            console.log("Você é do signo de Sagitário");
        } else if (dia >= 22 && dia <= 31) {
            console.log("Você é do signo de Capricórnio");
        }
        break;

    default:
        console.log("Mês inválido!");
}