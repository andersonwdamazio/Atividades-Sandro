const formulario = document.getElementById('formulario');
const campoTarefa = document.getElementById('tarefa');
const lista = document.getElementById('lista');

formulario.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const textoTarefa = campoTarefa.value.trim();

  if (textoTarefa === '') {
    return;
  }

  const item = document.createElement('li');
  item.textContent = textoTarefa;
  lista.appendChild(item);

  campoTarefa.value = '';
});

// A ul recebe os cliques dos li, inclusive dos criados dinamicamente.
lista.addEventListener('click', function(evento) {
  if (evento.target.tagName === 'LI') {
    evento.target.remove();
  }
});