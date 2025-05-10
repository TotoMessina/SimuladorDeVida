document.addEventListener("DOMContentLoaded", () => {
  const pantallaInicio = document.getElementById("pantalla-inicio");
  const pantallaJuego = document.getElementById("pantalla-juego");

  const btnNuevaVida = document.getElementById("btn-nueva-vida");
  const btnVolverInicioJuego = document.getElementById("btn-volver-inicio-juego");
  const btnGuardar = document.getElementById("btn-guardar");
  const btnCargarJuego = document.getElementById("btn-cargar-juego");

  // Crear personaje aleatorio y mostrar juego
  btnNuevaVida.addEventListener("click", () => {
    const nuevo = generarPersonajeAleatorio();
    mostrarPersonaje(nuevo);
    agregarEvento(`${nuevo.nombre} ha nacido en ${nuevo.ciudad}, ${nuevo.pais}.`);

    pantallaInicio.classList.add("oculto");
    pantallaJuego.classList.remove("oculto");
  });

  // Volver al menú principal desde el juego
  btnVolverInicioJuego.addEventListener("click", () => {
    pantallaJuego.classList.add("oculto");
    pantallaInicio.classList.remove("oculto");
  });

  // Guardar el personaje actual
  btnGuardar.addEventListener("click", () => {
    const personaje = JSON.parse(localStorage.getItem("personajeActual"));
    if (personaje) {
      localStorage.setItem("partidaGuardada", JSON.stringify(personaje));
      agregarEvento("Progreso guardado correctamente.");
    } else {
      agregarEvento("No hay personaje para guardar.");
    }
  });

  // Cargar personaje guardado
  btnCargarJuego.addEventListener("click", () => {
    const partida = JSON.parse(localStorage.getItem("partidaGuardada"));
    if (partida) {
      mostrarPersonaje(partida);
      agregarEvento(`Has retomado tu vida como ${partida.nombre}.`);

      pantallaInicio.classList.add("oculto");
      pantallaJuego.classList.remove("oculto");
    } else {
      alert("No hay ninguna partida guardada.");
    }
  });
});
