const btnMostrarSenha = document.getElementById('btnMostrarSenha');
const senha = document.getElementById('senha');

btnMostrarSenha.addEventListener('click', function() {
  if (senha.type === 'password') {
    senha.type = 'text';
    btnMostrarSenha.textContent = 'Esconder senha';
  } else {
    senha.type = 'password';
    btnMostrarSenha.textContent = 'Mostrar senha';
  }
});