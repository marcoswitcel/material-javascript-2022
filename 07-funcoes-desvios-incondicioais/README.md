# Funções ou Desvios Incondicionais

Funções são um dos principais meios de organizar e compor código em `JavaScript`

## Definindo sua primeira função

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
separados por vírgulas.

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

## Arrow Functions

Na maioria dos casos `arrow function` (função de seta) é uma sintaxe, forma de escrever,
alternativa para as funções tradicionais. Como essa forma alternativa
é muito usada é importante que revisemos o que muda.

Abaixo o código anterior reescrito como `arrow function`.

```js
const quadrado = (numero) => numero * numero;
// Arrow function com o bloco de código e o retorno explícito
// const quadrado = (numero) => { return numero * numero; };

const resultado = quadrado(4);

console.log("O resultado é: " + resultado); // O resultado é: 16
```

`Arrow Functions` são um forma de criar funções mais curtas
e as vezes mais claras.

O trecho abaixo contém apenas a função nomeada `quadrado`, podemos
perceber que as funções de seta fazem uso de uma  variável para que
possamos identificá-las dentro do programa. Também percebemos a
ausência da delimitação do bloco de código `{}`, nesse caso o trecho,
`numero * numero` é o código que será executado, e seu valor será
retornado, graças a outra diferença desse tipo de função, o retorno
do valor é implícito, não precisamos deixar claro através da
palavra-chave `return`, tudo que vem depois da seta `=>`, será
executado e o valor dessa operação será retornado.

```js
const quadrado = (numero) => numero * numero;
```

Podemos deixar as função de seta mais explícitas se quisermos,
o seguinte também é código válido. E até que é bem parecido com as
funções tradicionais.

```js
const quadrado = (numero) => {
    return numero * numero;
};
```

## Material de apoio

* [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)
* [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
