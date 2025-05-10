function mostrarPersonaje(personaje, esCargado = false) {
  const listaEventos = document.getElementById("lista-eventos");
  if (!esCargado && listaEventos) {
    listaEventos.innerHTML = "";
  }

  // Mostrar nombre, edad, etc...
  document.getElementById("nombre-jugador").textContent = personaje.nombre;
  document.getElementById("datos-jugador").textContent = `${personaje.edad} años, nacido en ${personaje.ciudad}, ${personaje.pais}`;

  // Mostrar atributos
  document.getElementById("felicidad").value = personaje.felicidad;
  document.getElementById("salud").value = personaje.salud;
  document.getElementById("inteligencia").value = personaje.inteligencia;
  document.getElementById("aspecto").value = personaje.aspecto;

  // Mostrar familia
  if (personaje.familia && Array.isArray(personaje.familia)) {
    mostrarFamilia(personaje.familia);
  } else {
    console.warn("El personaje no tiene familia generada.");
  }

  // Restaurar eventos si es una partida cargada
  if (esCargado && personaje.eventos) {
    personaje.eventos.forEach(evento => agregarEvento(evento));
  }
}

// Si ya hay un personaje guardado, lo mostramos al cargar
document.addEventListener("DOMContentLoaded", () => {
  const personajeGuardado = JSON.parse(localStorage.getItem("personajeActual"));
  if (personajeGuardado) {
    mostrarPersonaje(personajeGuardado);
  }
});

function actualizarUI(personaje) {
  const nombre = document.getElementById("nombre-jugador");
  const datos = document.getElementById("datos-jugador");
  const felicidad = document.getElementById("felicidad");
  const salud = document.getElementById("salud");
  const inteligencia = document.getElementById("inteligencia");
  const aspecto = document.getElementById("aspecto");

  if (nombre) nombre.textContent = personaje.nombre;
  if (datos) datos.textContent = `Edad: ${personaje.edad} años — Nacido en ${personaje.ciudad}, ${personaje.pais}`;
  if (felicidad) felicidad.value = personaje.felicidad;
  if (salud) salud.value = personaje.salud;
  if (inteligencia) inteligencia.value = personaje.inteligencia;
  if (aspecto) aspecto.value = personaje.aspecto;

  mostrarFamilia(personaje.familia);
}

function mostrarPantallaMuerte(personaje) {
  const pantallaJuego = document.getElementById("pantalla-juego");
  pantallaJuego.innerHTML = `
    <h2>💀 Fin de la vida</h2>
    <p>${personaje.nombre} ha muerto a los ${personaje.edad} años.</p>
    <button onclick="location.reload()">Comenzar nueva vida</button>
  `;
}

