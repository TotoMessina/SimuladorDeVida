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
  mostrarPersonaje(personaje);
}