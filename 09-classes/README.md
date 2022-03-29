# Classes

Classes em JavaScript substituem as antigas funções contrutoras
e tornam o código em partes mais organizado. Elas também facilitam
a utilização de heranças e conceitos comuns em outras linguagens de
programação orientadas a objetos, mas devemos analisar com calma.

```js
class Ponto {

    static contador = 0;

    // Posições X e Y
    constructor(x, y) {
        this.x = x;
        this.y = y;

        Ponto.contador++;
    }

    // Métodos não aparecem como propriedades dos objetos de ondem
    // eles vem?
    adicionar(point) {
        this.x += point.x;
        this.y += point.y;
    }

    // Override do método Object#toString
    toString() {
        return `Point { x: ${this.x}, y: ${this.y} }`
    }
}

const ponto = new Ponto(2, 13);
console.log(ponto.toString());

ponto.adicionar(new Ponto(6, 1));
console.log(ponto.toString());
```

## Material de apoio

* [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)
* [https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript-pt](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript-pt)
