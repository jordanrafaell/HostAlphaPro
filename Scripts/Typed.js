var typed = null; // Variável para armazenar a instância do Typed.js

function iniciarTyped() {
  if (typed === null) {
    typed = new Typed('.home_text_custom', {
      strings: ["O melhor serviço de hospedagem na web para o seu site."],
      typeSpeed: 80,
    });
  }
}

function removerTyped() {
  if (typed !== null) {
    typed.destroy(); // Destruir a instância do Typed.js
    typed = null; // Redefinir a variável para null
  }
}

document.addEventListener("DOMContentLoaded", iniciarTyped); // Inicialize o Typed.js no carregamento da página

// Verifique a largura da tela quando a página é carregada
window.addEventListener("load", function () {
  var larguraDaTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (larguraDaTela < 900) {
    removerTyped(); // Remova o Typed.js se a largura da tela for menor que 900 pixels
  }
});

// Adicione um ouvinte de evento de redimensionamento para verificar a largura da tela
window.addEventListener('resize', function() {
  var larguraDaTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Verifique se a largura da tela é menor que 900 pixels
  if (larguraDaTela < 900) {
    removerTyped(); // Remova o Typed.js
  } else {
    iniciarTyped(); // Inicialize o Typed.js novamente
  }
});