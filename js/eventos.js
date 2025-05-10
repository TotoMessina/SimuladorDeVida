function agregarEvento(texto) {
  const lista = document.getElementById("lista-eventos");
  const li = document.createElement("li");
  li.textContent = texto;
  lista.prepend(li); // Lo más nuevo arriba
}
