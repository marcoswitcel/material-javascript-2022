
export class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
}

export class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export default {
    Pessoa,
    Ponto
}
