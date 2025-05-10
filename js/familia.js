const nombresHombre = ["Juan", "Pedro", "Luis", "Carlos", "Diego"];
const nombresMujer = ["Ana", "Lucía", "María", "Camila", "Sofía"];

function crearFamiliar(nombre, tipo, edad) {
  return {
    nombre,
    tipo,
    edad,
    vivo: true,
    relacion: Math.floor(Math.random() * 41) + 60 // Relación inicial entre 60 y 100
  };
}

function generarFamilia() {
  const familia = [];

  // Padres
  if (Math.random() < 0.9) { // 90% probabilidad de tener madre
    const edadMadre = Math.floor(Math.random() * 10) + 20;
    const nombreMadre = elegirAleatorio(["Laura", "María", "Ana", "Clara"]);
    familia.push(crearFamiliar(nombreMadre, "Madre", edadMadre));
  }

  if (Math.random() < 0.9) { // 90% probabilidad de tener padre
    const edadPadre = Math.floor(Math.random() * 10) + 22;
    const nombrePadre = elegirAleatorio(["Carlos", "Jorge", "Luis", "Pedro"]);
    familia.push(crearFamiliar(nombrePadre, "Padre", edadPadre));
  }

  // Hermanos (0 a 3)
  const cantidadHermanos = Math.floor(Math.random() * 4);
  for (let i = 0; i < cantidadHermanos; i++) {
    const edadHermano = Math.floor(Math.random() * 10);
    const nombreHermano = elegirAleatorio(["Sofía", "Mateo", "Valentina", "Lucas"]);
    familia.push(crearFamiliar(nombreHermano, "Hermano", edadHermano));
  }

  return familia;
}

function mostrarFamilia(familia) {
  const lista = document.getElementById("lista-familia");
  if (!lista) return; // Evitar error si no existe

  lista.innerHTML = ""; // Limpiar lista

  familia.forEach((familiar, index) => {
    if (!familiar.vivo) return;

    const li = document.createElement("li");
    li.textContent = `${familiar.tipo}: ${familiar.nombre} (${familiar.edad} años)`;

    li.addEventListener("click", () => {
      mostrarAccionesFamiliar(familiar, index);
    });

    lista.appendChild(li);
  });
}

function mostrarAccionesFamiliar(familiar, index) {
  const menuAcciones = document.getElementById("acciones-familia");
  const contenedor = document.getElementById("contenedor-acciones-familiar");

  contenedor.innerHTML = `
    <h4>${familiar.tipo}: ${familiar.nombre}</h4>
    <p>Edad: ${familiar.edad}</p>
    <p>Relación: <progress max="100" value="${familiar.relacion}"></progress> (${familiar.relacion})</p>
    <button id="btn-saludar">👋 Saludar</button>
    <button id="btn-discutir">💢 Discutir</button>
    <button id="btn-regalar">🎁 Regalar</button>
  `;

  document.getElementById("btn-saludar").onclick = () => {
    familiar.relacion = Math.min(familiar.relacion + 5, 100);
    agregarEvento(`Saludaste a ${familiar.nombre}. Tu relación mejoró.`);
    mostrarAccionesFamiliar(familiar, index); // Refrescar UI
    mostrarFamilia(personaje.familia);
  };

  document.getElementById("btn-discutir").onclick = () => {
    familiar.relacion = Math.max(familiar.relacion - 10, 0);
    agregarEvento(`Tuviste una discusión con ${familiar.nombre}. Tu relación empeoró.`);
    mostrarAccionesFamiliar(familiar, index);
    mostrarFamilia(personaje.familia);
  };

  document.getElementById("btn-regalar").onclick = () => {
    familiar.relacion = Math.min(familiar.relacion + 10, 100);
    agregarEvento(`Le diste un regalo a ${familiar.nombre}. Tu relación mejoró.`);
    mostrarAccionesFamiliar(familiar, index);
    mostrarFamilia(personaje.familia);
  };

  menuAcciones.classList.remove("oculto");
}

function envejecerFamilia(familia) {
  familia.forEach(familiar => {
    if (familiar.vivo) {
      familiar.edad++;

      // 5% de probabilidad de muerte a partir de los 60 años
      if (familiar.edad >= 60 && Math.random() < 0.05) {
        familiar.vivo = false;
        agregarEvento(`${familiar.nombre} (${familiar.tipo}) ha fallecido a los ${familiar.edad} años.`);
      }
    }
  });
}
