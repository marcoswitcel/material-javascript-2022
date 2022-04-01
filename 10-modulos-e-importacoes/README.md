# Módulos e importações

Em `JavaScript` o sistema de modularização é baseado na separação de funcionalidades em diversos arquivos.

As palavras-chave `export` e `import` provém as funcionalidades que nos permitem reutilizar o código.

Arquivo `modulo.js`

```js
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
```

Arquivo `index.js`

```js
import Modulo, { Pessoa, Ponto as Point } from "./modulo.js";

console.log(new Pessoa("João", 25, 1.75));
console.log(new Modulo.Pessoa("João", 25, 1.75));
console.log(new Point(2,2));

```

## Material de apoio

* [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
* [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
