# Tratando erros

A forma de programação preventiva que temos em JavaScript para que
nosso programa se recupere de erros é através de blocos try/catch.

```js
try {
    console.log("Até aqui tudo bem");
    throw new Error("Houston, temos um problema");
    console.log("eu não apareço, né?");
} catch (e) {
    console.error(e);
} finally {
    console.warn("Eu sempre executo, e executo por último");
}
```

```js
try {
    const pessoa = { nome: "João" };

    pessoa.falar();
} catch (e) {
    console.error(e);
} finally {
    console.warn("Eu sempre executo, e executo por último");
}
```

## Classe Error

## Palavra-chave throws

## Material de apoio

* [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/try...catch)
