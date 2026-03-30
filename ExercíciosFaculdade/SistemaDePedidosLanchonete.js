//  Sistema de Pedidos da Lanchonete
var prompt = require('prompt-sync')({ sigint: true });

console.log("Seja bem-vindo(a) à nossa lanchonete!");
console.log("---------------------------------------");
console.log("Esse é o nosso cardápio:");
console.log("");
console.log("BEBIDAS:");
console.log("(1) Garrafa de água 500ml: R$3,00");
console.log("(2) Sucos naturais na jarra 1L (uva, laranja ou caju): R$15,00");
console.log("(3) Refrigerante Coca-cola ou Guarana lata: R$5,00");
console.log("");
console.log("LANCHES:");
console.log("(4) Crepe (mussarela com presunto, tomate com queijo ou de chocolate): R$7,00");
console.log("(5) Misto quente: R$5,00");
console.log("(6) Pizza (calabresa, marguerita ou 3 queijos): R$28,00");
console.log("(7) Pão de Queijo (10 un): R$6,00");
console.log("---------------------------------------");

let numPedido = prompt("Digite o número do pedido que você quer realizar: ");

switch (numPedido) {
    case "1":
        console.log("Garrafa de água 500ml: R$3,00, foi adicionada ao seu carrinho.");
        break;

    case "2":
        console.log("Você escolheu sucos naturais na jarra 1L: R$15,00.");
        let sabor = prompt("Qual sabor você deseja? (uva, laranja ou caju): ").toLowerCase();
        if (sabor === "uva" || sabor === "laranja" || sabor === "caju") {
            console.log(`Suco de sabor ${sabor} foi adicionado ao seu carrinho.`);
        } else {
            console.log("Sabor inválido. Por favor, escolha entre uva, laranja ou caju.");
        }
        break;

    case "3":
        console.log("Você escolheu Refrigerante: R$5,00.");
        let refri = prompt("Qual refri você deseja? (coca-cola ou guarana): ").toLowerCase();
        if (refri === "coca-cola" || refri === "coca" || refri === "guarana") {
            console.log(`Refrigerante ${refri} foi adicionado ao seu carrinho.`);
        } else {
            console.log("Opção inválida. Escolha entre Coca-cola ou Guarana.");
        }
        break;

    case "4":
        console.log("Você escolheu Crepe: R$7,00.");
        let crepe = prompt("Qual sabor? (mussarela com presunto, tomate com queijo ou chocolate): ").toLowerCase();
        if (crepe === "mussarela com presunto" || crepe === "tomate com queijo" || crepe === "chocolate") {
            console.log(`Crepe de ${crepe} adicionado ao seu carrinho.`);
        } else {
            console.log("Sabor de crepe inválido.");
        }
        break;

    case "5":
        console.log("Misto quente: R$5,00, foi adicionado ao seu carrinho.");
        break;

    case "6":
        console.log("Você escolheu Pizza: R$28,00.");
        let pizza = prompt("Qual sabor? (calabresa, marguerita ou 3 queijos): ").toLowerCase();
        if (pizza === "calabresa" || pizza === "marguerita" || pizza === "3 queijos") {
            console.log(`Pizza sabor ${pizza} foi adicionada ao seu carrinho.`);
        } else {
            console.log("Sabor de pizza inválido.");
        }
        break;

    case "7":
        console.log("Pão de Queijo (10 un) R$6,00 foi adicionado ao seu carrinho.");
        break;

    default:
        console.log("Digite um número de 1 a 7 para escolher algo no cardápio.");
}

let finalizar = prompt("Deseja finalizar seu pedido? [sim/não]: ");

if (finalizar.toLowerCase() === "sim") {
    console.log("Compra finalizada!");
} else {
    console.log("Ok, pode continuar navegando pelo cardápio!");
}