let cadastros = [];
let indiceAtual = -1;

function atualizarInterface() {
  if (indiceAtual >= 0 && cadastros[indiceAtual]) {
    document.getElementById('nome').value = cadastros[indiceAtual].nome;
    document.getElementById('email').value = cadastros[indiceAtual].email;
    document.getElementById('telefone').value = cadastros[indiceAtual].telefone;
    document.getElementById('info').innerText = `Cadastro ${indiceAtual + 1} de ${cadastros.length}`;
  } else {
    limpar();
    document.getElementById('info').innerText = 'Nenhum cadastro';
  }
}

function adicionar() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  if (nome && email && telefone) {
    cadastros.push({ nome, email, telefone });
    indiceAtual = cadastros.length - 1;
    atualizarInterface();
  }
}

function editar() {
  if (indiceAtual >= 0 && cadastros[indiceAtual]) {
    cadastros[indiceAtual].nome = document.getElementById('nome').value;
    cadastros[indiceAtual].email = document.getElementById('email').value;
    cadastros[indiceAtual].telefone = document.getElementById('telefone').value;
    atualizarInterface();
  }
}

function remover() {
  if (indiceAtual >= 0) {
    cadastros.splice(indiceAtual, 1);
    if (indiceAtual > 0) indiceAtual--;
    atualizarInterface();
  }
}

function limpar() {
  document.getElementById('nome').value = '';
  document.getElementById('email').value = '';
  document.getElementById('telefone').value = '';
}

function proximo() {
  if (indiceAtual < cadastros.length - 1) {
    indiceAtual++;
    atualizarInterface();
  }
}

function anterior() {
  if (indiceAtual > 0) {
    indiceAtual--;
    atualizarInterface();
  }
}

function primeiro() {
  if (cadastros.length > 0) {
    indiceAtual = 0;
    atualizarInterface();
  }
}

function ultimo() {
  if (cadastros.length > 0) {
    indiceAtual = cadastros.length - 1;
    atualizarInterface();
  }
}