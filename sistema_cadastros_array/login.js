function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if (user === 'admin' && pass === 'admin') {
    window.location.href = 'cadastro.html';
  } else {
    document.getElementById('loginError').innerText = "Usuário ou senha inválidos";
  }
}