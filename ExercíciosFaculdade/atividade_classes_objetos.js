// Aluna: Bruna Bonifácio
// RA: 22509111

// --- Parte 1: Winx ---
class Winx {
    constructor(nome, corCabelo, poderes, corRoupa) {
        this.nome = nome;
        this.corCabelo = corCabelo;
        this.poderes = poderes;
        this.corRoupa = corRoupa;
    }

    info() {
        return `A cor do cabelo de ${this.nome} é ${this.corCabelo}`;
    }

    getPoderes() {
        return `O poder da ${this.nome} é ${this.poderes}`;
    }
}

// Instanciando as Winx
const bloom = new Winx("Bloom", "vermelho", "lançar a chama do Dragão", "azul");
const stella = new Winx("Stella", "amarelo", "controlar a Luz", "laranja");
const flora = new Winx("Flora", "Castanho claro", "controlar as plantas", "rosa");

console.log(bloom.info());
console.log(stella.info());
console.log(flora.info());
console.log("-".repeat(70));
console.log(bloom.getPoderes());
console.log(stella.getPoderes());
console.log(flora.getPoderes());

console.log("\n" + "=".repeat(70) + "\n");

// --- Parte 2: Celulares ---
class Celulares {
    constructor(marca, modelo, cor, anoFabricacao) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.anoFabricacao = anoFabricacao;
    }

    descricao() {
        return `O meu celular é da marca ${this.marca}, modelo ${this.modelo} e na cor ${this.cor}`;
    }

    anoFab() {
        return `O ano em que meu celular da ${this.marca} foi fabricado foi em ${this.anoFabricacao}`;
    }
}

const celular1 = new Celulares('Apple', 'iphone13', 'rosa', 2023);
const celular2 = new Celulares('Samsung', 'S10e', 'preto', 2019);
const celular3 = new Celulares('Motorola', 'Motog5', 'cinza', 2021);

console.log(celular1.descricao());
console.log(celular2.descricao());
console.log(celular3.descricao());
console.log('-'.repeat(70));
console.log(celular1.anoFab());
console.log(celular2.anoFab());
console.log(celular3.anoFab());