function agregarEvento(texto) {
  const lista = document.getElementById("lista-eventos");
  const item = document.createElement("li");
  item.textContent = texto;
  lista.prepend(item); // para que el más reciente esté arriba

  if (!personajeActual.eventos) personajeActual.eventos = [];
  personajeActual.eventos.unshift(texto);
}

function verificarMuerte(personaje) {
  // Mayor edad → mayor probabilidad de muerte
  const edadFactor = (personaje.edad - 60) * 0.01; // Aumenta 1% por año después de los 60
  const saludFactor = (100 - personaje.salud) * 0.005; // Más baja salud, más riesgo
  const probabilidadMuerte = edadFactor + saludFactor;

  if (Math.random() < probabilidadMuerte) {
    personaje.vivo = false;
    agregarEvento(`${personaje.nombre} ha fallecido a los ${personaje.edad} años.`);
    mostrarPantallaMuerte(personaje); // Mostrar pantalla final o mensaje
  }
}