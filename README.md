# cefet-web-coral55

Um cardápio das gostosuras marítimas servidas na Lanchonete do Coral 55.

## Atividade

Você deve estilizar a página do cardápio (arquivo `index.html`) de forma a
implementar o _comprehensive layout_ criado por um _designer_ (arquivo
`coral55-comp.png`). Você deve usar a especificação do _layout_ (arquivo
`coral55-specs.png`).

### Diretrizes do Exercício

Aqui estão os itens que precisam ser implementados:

1. Use elementos semânticos no lugar de `<div></div>` e `<span></span>`
  sempre que um deles existir.
1. Use a fonte "Ravie" que está inclusa no projeto, dentro da pasta `fonts`.
1. Estude qual o melhor seletor CSS para cada situação.
1. Use espaçamento (vertical) duplo para os itens do cardápio.
1. Inclua o `<script></script>` `js/bubbles.js`.
1. Lembre-se de como funciona o _box-model_ na hora de definir as dimensões
  dos elementos.
1. Lembre-se de que elementos posicionados de forma `absolute` têm seu como
  seu sistema de coordenadas o **seu ancestral mais próximo que esteja com
  posicionamento não-estático** (_i.e._, `position: [absolute, relative,
  fixed]`).
  - Tipicamente colocamos `position: relative;` no elemento pai de um elemento
    com `position: absolute;` para servir de sistema de coordenadas.

### <abbr title="Frequently Asked Questions">FAQ</abbr>

- Para rotacionar um elemento no sentido horário:

  ```css
  #elemento {
    transform: rotate(45deg); /* dado em graus, sentido horário */
  }
  ```
- Para fazer uma transição suave da posição `left` de um elemento, usamos
  a propriedade `transition`:

  ```css
  #elemento {
    /* ... */
    left: -100px;
    transition: left 100ms ease-out; /* propriedade, duração, interpolação */
  }
  #element:hover {
    left: 0;
  }
  ```
- Centralizando um elemento `block` cuja largura é sempre a mesma:

  ```css
  #elemento {
    width: /* um valor */;
    margin-left: auto;
    margin-right: auto;
  }
  ```
- Meu degradê não está funcionando... por quê?
  - Possivelmente, você está atribuindo um `linear-gradient(...)` para a
    propriedade `background-color`, mas um degradê é, para o CSS, um
    `background-image`
