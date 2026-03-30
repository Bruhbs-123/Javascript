// Aluna: Bruna Bonifácio
// RA: 22509111

const prompt = require('prompt-sync')({sigint: true});

// 1. Triplo de um número real
function triplo(num) {
    return 3 * num;
}
console.log("Triplo de 5:", triplo(5));
console.log("-".repeat(70));

// 2. Triplo com entrada do usuário
function triploNum() {
    const num = parseFloat(prompt("Digite um número real: "));
    return 3 * num;
}
console.log(triploNum()); 

// 3. Mensagem fixa
function mensagemIA() {
    return "Use IA Integrada à sua inteligência humana.";
}
console.log(mensagemIA());
console.log("-".repeat(70));

// 4. Raízes de equação do segundo grau
function raizesReais(a, b, c) {
    const delta = b * b - 4 * a * c;
    if (delta < 0) return "Raízes são complexas e não-reais.";
    
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [raiz1, raiz2];
}
console.log("Raízes (1, -3, 2):", raizesReais(1, -3, 2));

// 5. Tipo de raízes baseado no delta
function tipoRaizes(a, b, c) {
    const delta = b * b - 4 * a * c;
    if (delta < 0) return "Duas raízes não-reais.";
    else if (delta === 0) return "Duas raízes reais e idênticas.";
    else return "Duas raízes reais e distintas.";
}
console.log("Tipo de raízes:", tipoRaizes(1, 2, 5));

// 6. Números ímpares entre dois valores
function imparesEntre(num1, num2) {
    const inicio = Math.ceil(Math.min(num1, num2));
    const fim = Math.floor(Math.max(num1, num2));
    const impares = [];
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 !== 0) {
            impares.push(i);
        }
    }
    return impares;
}
console.log("Ímpares entre 0 e 10:", imparesEntre(0, 10));

// 7. Múltiplos específicos
function multiplos(a, b) {
    let r = [];
    for (let i = a; i <= b; i++) {
        if (i % 3 === 0 && i % 7 !== 0 && ![30, 60, 90].includes(i)) {
            r.push(i);
        }
    }
    return r;
}
console.log("Múltiplos de 3 (1-100):", multiplos(1, 100));

// 8. Ano de Copa do Mundo
function copa(ano) {
    if (ano >= 1930 && (ano - 1930) % 4 === 0) {
        return "É ano de Copa. Edição " + ((ano - 1930) / 4 + 1);
    }
    return "Não é ano de Copa do Mundo.";
}
console.log(copa(2002));

// 11. Exemplo de Arrow Function
const exemploArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const resultadoArrowFunction = () => {
    const dobrados = exemploArray.map(x => x * 2);
    const pares = exemploArray.filter(x => x % 2 === 0);
    return {
        original: exemploArray,
        dobrados,
        pares
    };
};
console.log("Arrow Function Result:", resultadoArrowFunction());