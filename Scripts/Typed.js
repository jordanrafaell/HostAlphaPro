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

