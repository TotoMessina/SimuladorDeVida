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
  const contenedor = document.getElementById("relaciones");
  contenedor.innerHTML = ""; // Limpiar

  familia.forEach(f => {
    if (!f.vivo) return;

    const div = document.createElement("div");
    div.className = "familiar";
    div.innerHTML = `
      <strong>${f.tipo}:</strong> ${f.nombre} (${f.edad} años) <br>
      Relación: <progress class="atributo"  max="100" value="${f.relacion}"></progress> (${f.relacion}) <br>
      <button class="btn-saludar">👋 Saludar</button>
      <button class="btn-discutir">💢 Discutir</button>
      <button class="btn-regalar">🎁 Regalar</button>
    `;

    // Interacciones
    div.querySelector(".btn-saludar").addEventListener("click", () => {
      f.relacion = Math.min(f.relacion + 5, 100);
      agregarEvento(`Saludaste a ${f.nombre}. Tu relación mejoró.`);
      mostrarFamilia(familia); // Actualizar UI
    });

    div.querySelector(".btn-discutir").addEventListener("click", () => {
      f.relacion = Math.max(f.relacion - 10, 0);
      agregarEvento(`Tuviste una discusión con ${f.nombre}. Tu relación empeoró.`);
      mostrarFamilia(familia);
    });

    div.querySelector(".btn-regalar").addEventListener("click", () => {
      f.relacion = Math.min(f.relacion + 10, 100);
      agregarEvento(`Le diste un regalo a ${f.nombre}. Tu relación mejoró.`);
      mostrarFamilia(familia);
    });

    contenedor.appendChild(div);
  });
  actualizarColoresBarra();
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
