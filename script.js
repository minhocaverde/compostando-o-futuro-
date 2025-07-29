// script.js

// Login simples com nome e senha
const loginForm = document.getElementById("login-form");
const gameSection = document.getElementById("game-section");
const welcomeText = document.getElementById("welcome-text");
const avatarImage = document.getElementById("avatar-image");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    // Simula login - no futuro pode ser armazenado localmente ou em banco
    loginForm.style.display = "none";
    gameSection.style.display = "block";
    welcomeText.innerText = `Bem-vindo(a), ${username}! Essa é sua parceira na jornada:`;
    avatarImage.src = "img/minhoca-verde.png"; // caminho base do avatar padrão
  } else {
    alert("Por favor, preencha nome e senha.");
  }
});

// Em breve: lógica para jogo da memória, roleta e sistema de recompensa
// As funções podem ser acrescentadas abaixo conforme o progresso
