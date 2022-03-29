# Operadores de desestruturação e espalhamento

## Sintaxe de desetruturação

A sintaxe de desetruturação permite a fácil atribuição de valores, armazenado em um Array ou como propriedades de um Objeto a uma variável.

### Aplicada a Arrays

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

### Aplicada a Objects

A desestruração quando usada em um Objeto permite a definição rápida e prática de variáveis baseadas nos nomes da propriedaes do objeto.

```js
const pessoa = {
    nome: "João",
    idade: 25,
    altura: 1.75,
};
// Cada um dos valores que antes era acessível apenas através da variável
// pessoa, agora pode ser acessado pelas variáveis, nome, idade e altura
// respectivamente
const { nome, idade, altura } = pessoa;
```

## Sintaxe de Espalhamento

Permite a expansão de uma lista para aplicação em funções, construção de novas
listas ou objetos.

### Aplicada a Arrays

#### Espalhando valores como argumentos em um função.

Argumentos são os valores que passamos na hora da execução da função.
Parâmetro é o nome dado a variável aonde o argumento será armazenado durante
a execução da função.

```js
const dadosPessoa = ["João", 25];

function log(nome, idade) {
    console.log(`nome: ${nome}, idade: ${idade}`);
}

// Ao invés de desestruturarmos os dados em variáveis e aí executarmos
// a função usando a referência das variáveis, podemos "espalhar" os
// valores em ordem nos parâmetros esperados, bem semelhante ao que 
// aconteceria se fizéssemos:
// const [ nome, idade ] = dadosPessoa;
log(...dadosPessoa);
// O parâmetro "nome" da função recebeu o primeiro valor, String "João"
// e o segundo o Number 25
```

#### Espalhando valores para duplicar listas e ou concatenar

```js
const numerosDe0a4 = [ 0, 1, 2, 3, 4 ];
const numerosDe5a9 = [ 5, 6, 7, 8, 9 ];

const todosAlgarismos = [ ...numerosDe0a4, ...numerosDe5a9 ];

console.log(todosAlgarismos);
```

### Aplicada a Objects

#### Espalhando atributos para duplicar um objeto

```js
const pessoa = {
    nome: "João",
    idade: 25,
    altura: 1.75,
};

const clonePessoa = { ...pessoa };

console.log(pessoa, clonePessoa);

if (pessoa === clonePessoa) {
    console.log("são o mesmo objeto");
} else {
    console.log("não são o mesmo objeto");
}
```

## Material de apoio

* [Entendendo as sintaxes de desestruturação, parâmetros rest e espalhamento em JavaScript](https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt)
* [Sintaxe de Espalhamento](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
