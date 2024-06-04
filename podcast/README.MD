Títulos Épicos para o Ebook sobre CSS com Temática de Star Wars
CSS: O Despertar da Força
CSS: A Nova Esperança do Design
CSS: O Império dos Seletores
CSS: A Ascensão dos Estilos
CSS: Retorno dos Jedi dos Estilos
Ebook: CSS - O Despertar da Força
Introdução
Bem-vindo ao universo do CSS! Se você é um padawan em programação, está no lugar certo. Este ebook vai guiá-lo pelos principais seletores CSS, explicando de maneira simples e prática, com exemplos reais que irão ajudá-lo a dominar a arte de estilizar suas páginas web.

## Capítulo 1: Seletores Básicos - A Nova Esperança
Seletor de Elemento
O seletor de elemento seleciona todos os elementos de um tipo específico em um documento HTML.

```bash
/* Seleciona todos os parágrafos */
p {
    color: blue;
}
```

# Exemplo em Contexto Real

```bash
<!DOCTYPE html>
<html>
<head>
    <style>
        p {
            color: blue;
        }
    </style>
</head>
<body>
    <p>Este texto será azul.</p>
    <p>Este também será azul.</p>
</body>
</html>
```

## Capítulo 2: Seletores de Classe e ID - O Império dos Seletores
Seletor de Classe
O seletor de classe aplica estilos a todos os elementos que possuem uma classe específica.

```bash
/* Seleciona todos os elementos com a classe .destaque */
.destaque {
    font-weight: bold;
    color: red;
}
```

## Seletor de ID
O seletor de ID estiliza um único elemento que possui um ID específico.

Exemplo em Contexto Real

```bash
<!DOCTYPE html>
<html>
<head>
    <style>
        .destaque {
            font-weight: bold;
            color: red;
        }
    </style>
</head>
<body>
    <p class="destaque">Este texto estará em negrito e vermelho.</p>
    <p>Este texto não será afetado.</p>
</body>
</html>
```

## Capítulo 3: Seletores de Atributo - A Ascensão dos Estilos
Seletor de Atributo
O seletor de atributo aplica estilos aos elementos que possuem um atributo específico ou um valor de atributo específico.

```bash
/* Seleciona todos os elementos com o atributo title */
[title] {
    border: 1px solid black;
}

/* Seleciona todos os elementos com o atributo type="text" */
input[type="text"] {
    background-color: lightgray;
}
```

##### Exemplo em Contexto Real

```bash
<!DOCTYPE html>
<html>
<head>
    <style>
        [title] {
            border: 1px solid black;
        }
        input[type="text"] {
            background-color: lightgray;
        }
    </style>
</head>
<body>
    <p title="Dica">Este parágrafo terá uma borda preta.</p>
    <input type="text" placeholder="Texto cinza claro">
    <input type="button" value="Não será afetado">
</body>
</html>
```

## Capítulo 4: Seletores de Pseudo-classes e Pseudo-elementos - Retorno dos Jedi dos Estilos
Seletor de Pseudo-classes
Pseudo-classes selecionam elementos com base em seu estado.

```bash
/* Seleciona links quando são visitados */
a:visited {
    color: purple;
}

/* Seleciona o primeiro filho de um elemento */
p:first-child {
    font-style: italic;
}
```

##### Exemplo em Contexto Real

```bash
<!DOCTYPE html>
<html>
<head>
    <style>
        a:visited {
            color: purple;
        }
        p:first-child {
            font-style: italic;
        }
    </style>
</head>
<body>
    <a href="#">Link não visitado</a>
    <a href="#">Link visitado</a>
    <p>Este parágrafo é o primeiro filho e será itálico.</p>
    <p>Este parágrafo não será afetado.</p>
</body>
</html>
```


```bash
Seletor de Pseudo-elementos
Pseudo-elementos permitem aplicar estilos a partes específicas de um elemento.
```

##### Exemplo em Contexto Real

```bash
<!DOCTYPE html>
<html>
<head>
    <style>
        p::first-letter {
            font-size: 200%;
            color: green;
        }
    </style>
</head>
<body>
    <p>Primeira letra em verde e maior.</p>
    <p>Este parágrafo também será estilizado da mesma forma.</p>
</body>
</html>
```