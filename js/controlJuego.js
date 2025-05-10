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
          if (personajeActual.familia) {
            personajeActual.familia.forEach(familiar => {
              familiar.edad++;

              // Probabilidad de muerte con edad (ejemplo simple)
              if (familiar.vivo && Math.random() < (familiar.edad - 60) * 0.01) {
                familiar.vivo = false;
                agregarEvento(`Tu ${familiar.tipo.toLowerCase()} ${familiar.nombre} ha fallecido a los ${familiar.edad} años.`);
              }
            });
          }
          verificarMuerte(personajeActual);
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

function actualizarColoresBarra() {
  const barras = document.querySelectorAll('progress.atributo');
  barras.forEach(barra => {
    const valor = barra.value / barra.max;

    let color = '#00D38E'; // verde por defecto

    if (valor < 0.3) {
      color = '#d50000'; // rojo
    } else if (valor < 0.6) {
      color = '#ff6d00'; // naranja
    } else if (valor < 0.8) {
      color = '#ffd600'; // amarillo
    }

    barra.style.setProperty('--color-barra', color);
  });
}
