# Operadores de desestruturação e espalhamento

## Sintaxe de desetruturação

A sintaxe de desetruturação permite a fácil atribuição de valores, armazenado em um Array ou como propriedades de um Objeto a uma variável.

### Arrays

A desestruração quando usada em um Array permite a definição rápida e prática de variáveis baseadas na ordem dos elementos presentes no Array.

```js
const listaDeTarefas = [
    "limpar a casa",
    "fazer as atividades da faculdade",
    "pagar as contas"
];

const [ primeiraTarefa, segundaTarefa, terceiraTarefa ] = listaDeTarefas;

console.log("A primeira tarefa é: " + primeiraTarefa);
```

### Objects

A desestruração quando usada em um Objeto permite a definição rápida e prática de variáveis baseadas nos nomes da propriedaes do objeto.

```js
const pessoa = {
    nome: "John Doe",
    idade: 25,
    altura: 1.75,
};
// Cada um dos valores que antes era acessível apenas através da variável
// pessoa, agora pode ser acessado pelas variáveis, nome, idade e altura
// respectivamente
const { nome, idade, altura } = pessoa;
```

## Sintaxe de Espalhamento

### Arrays

Conteúdo...

### Objects

Conteúdo...

## Material de apoio

* [Entendendo as sintaxes de desestruturação, parâmetros rest e espalhamento em JavaScript](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt)
* [Sintaxe de Espalhamento](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
