// Listagem de Anos Bissextos (2024 a 2500)
for (let i = 2024; i <= 2500; i += 4) {
    if ((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)) {
        console.log("O ano " + i + " é bissexto");
    }
}