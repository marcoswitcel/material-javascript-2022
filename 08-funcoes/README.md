# Funções

Funções são um dos principais meios de organizar e compor código em `JavaScript`

### Definindo sua primeira função

Para definir uma função podemos usar a palavra chame `function`, seguida pelo
nome da função, os parênteses e o bloco de código que deve ser executado.
Contendo as instruções que serão executadas quando a função for invocada.
A execução pode ou não retorna um valor para quem chama a função, isso 
depende se a função retorna algo através da palavra chave `return`

No exemplo a seguir definiremos uma função que eleva um número ao quadrado.

```js
function quadrado(numero) {
    // Um número vezes ele mesmo é igual ao seu quadrado
    return numero * numero;
}
```

Para executarmos a função, digitamos o nome da função seguido do par de
parênteses, dentro dos parênteses devemos passar os valores que serão
usados durante a execução da função, caso a função espere algum.
Quando mais de um valor forem esperados eles devem ser passados,
separados por vírgul `,`.

Nesse caso a função espera um `argumento`, que será usado através do 
`parâmetro` nomeado `numero`. Argumento é o valor que passaremos e
parâmetro é o nome especial da variável que armazenará a referência
para o valor que passamos.

```js
const resultado = quadrado(4);

console.log("O resultado é: " + resultado); // O resultado é: 16
```

Código todo para testes.

```js
function quadrado(numero) {
    // Um número vezes ele mesmo é igual ao seu quadrado
    return numero * numero;
}

const resultado = quadrado(4);

console.log("O resultado é: " + resultado); // O resultado é: 16
```

## Material de apoio

* [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
