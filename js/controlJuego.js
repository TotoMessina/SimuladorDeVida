let personajeActual = null;

document.addEventListener("DOMContentLoaded", () => {
  let botonesJuegoInicializados = false; // <- Agregamos esta bandera

  function inicializarBotonesJuego() {
    if (botonesJuegoInicializados) return; // <- Evitamos múltiples asignaciones
    botonesJuegoInicializados = true;

    const btnNuevo = document.getElementById("btn-nuevo-personaje");
    const btnEdad = document.querySelectorAll("#btn-avanzar-edad");

    if (btnNuevo) {
      btnNuevo.addEventListener("click", () => {
        const nuevo = generarPersonajeAleatorio();
        mostrarPersonaje(nuevo);
        agregarEvento(`${nuevo.nombre} ha nacido en ${nuevo.ciudad}, ${nuevo.pais}.`);
      });
    }

    btnEdad.forEach(boton => {
      boton.addEventListener("click", () => {
        if (personajeActual) {
          personajeActual.edad++;
          envejecerFamilia(personajeActual.familia); 
          actualizarUI(personajeActual);
          agregarEvento(`Ahora tienes ${personajeActual.edad} años.`);
          guardarEstadoActual();
        }
      });
    });
  }

  const observer = new MutationObserver(() => {
    const pantallaJuego = document.getElementById("pantalla-juego");
    if (!pantallaJuego.classList.contains("oculto")) {
      inicializarBotonesJuego();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"]
  });
});

function guardarEstadoActual() {
  if (personajeActual) {
    localStorage.setItem("personajeActual", JSON.stringify(personajeActual));
  }
}
