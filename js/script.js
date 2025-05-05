function inicializar() {
  let menuOpcoes = document.querySelector('.menu');

  if (menuOpcoes instanceof HTMLDivElement) {
    let itemSelecionado = menuOpcoes.querySelector('.divSelecionarItens');
    let opcoesNaLista = menuOpcoes.querySelectorAll('.itemLista');
    let textoSpanBtn = menuOpcoes.querySelector('.textoSpanBtn');

    if (itemSelecionado) {
      // Adiciona um evento de clique no botão para alternar o estado do menu
      itemSelecionado.addEventListener('click', (event) => {
        alternarMenu(event, menuOpcoes);
      });

      // Adiciona um evento global para fechar o menu quando clicar fora dele
      document.addEventListener('click', (event) => {
        fecharMenu(event, menuOpcoes);
      });
    }

    // Adiciona eventos de clique para cada item da lista de opções
    opcoesNaLista.forEach((opcao) => {
      opcao.addEventListener('click', () => {
        selecionarOpcao(opcao, textoSpanBtn, menuOpcoes);
      });
    });
  }
}

function alternarMenu(event, menuOpcoes) {
  if (menuOpcoes instanceof HTMLDivElement) {
    // Alterna a classe 'active' no menu.
    // Quando 'active' é adicionada, o menu fica visível
    menuOpcoes.classList.toggle('active');

    // Impede que o clique no botão propague o evento para o documento
    event.stopPropagation();
  }
}

function fecharMenu(event, menuOpcoes) {
  // Verifica se o clique ocorreu fora do menu
  if (!menuOpcoes.contains(event.target)) {
    // Remove a classe 'active' para fechar o menu, caso ele esteja aberto
    if (menuOpcoes.classList.contains('active')) {
      menuOpcoes.classList.remove('active');
    }
  }
}

function selecionarOpcao(opcao, textoSpanBtn, menuOpcoes) {
  if (
    opcao instanceof HTMLLIElement &&
    textoSpanBtn instanceof HTMLSpanElement
  ) {
    let textoItem = opcao.querySelector('.textoItem');

    if (textoItem instanceof HTMLSpanElement) {
      let opcaoSelecionada = textoItem.textContent;
      textoSpanBtn.textContent = opcaoSelecionada;

      // Fecha o menu removendo a classe 'active'
      if (menuOpcoes instanceof HTMLDivElement) {
        menuOpcoes.classList.remove('active');
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
