/**
 * Operadores de desestruturação e espalhamento
 */

/**
 * Sintaxe de desestruturação
 * @url https://www.digitalocean.com/community/tutorials/understanding-destructuring-rest-parameters-and-spread-syntax-in-javascript-pt
 */

/**
 * Desestruturação com arrays
 */

const listaDeTarefas = [
    "limpar a casa",
    "fazer as atividades da faculdade",
    "pagar as contas"
];

const [ primeiraTarefa, segundaTarefa, terceiraTarefa ] = listaDeTarefas;

console.log("A primeira tarefa é: " + primeiraTarefa);
console.log("Todas as tarefas", ...listaDeTarefas);

/**
 * Sintaxe de espalhamento com arrays
 * 
 * @url https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */


