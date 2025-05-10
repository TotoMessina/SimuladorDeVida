function mostrarPersonaje(personaje) {
  const contenedor = document.getElementById("info-personaje");

  if (!personaje || !contenedor) return;

  contenedor.innerHTML = `
    <h2>${personaje.nombre}</h2>
    <p><strong>Género:</strong> ${personaje.genero}</p>
    <p><strong>Edad:</strong> ${personaje.edad} años</p>
    <p><strong>País:</strong> ${personaje.pais}</p>
    <p><strong>Ciudad:</strong> ${personaje.ciudad}</p>
    <p><strong>Clase social:</strong> ${personaje.rangoSocial}</p>
    <p><strong>Talento:</strong> ${personaje.talento}</p>
    <hr>
    <p><strong>Felicidad:</strong> ${personaje.felicidad}</p>
    <p><strong>Salud:</strong> ${personaje.salud}</p>
    <p><strong>Inteligencia:</strong> ${personaje.inteligencia}</p>
    <p><strong>Aspecto:</strong> ${personaje.aspecto}</p>
  `;
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
