function generarFamilia() {
  const miembros = ["Madre", "Padre", "Hermano", "Hermana"];
  return miembros.map(miembro => ({
    tipo: miembro,
    nombre: miembro + " " + Math.floor(Math.random() * 1000),
    edad: Math.floor(Math.random() * 30) + 20,
    relacion: "Viva"
  }));
}

function mostrarFamilia(familia) {
  const lista = document.getElementById("lista-familia");
  lista.innerHTML = "";

  familia.forEach(miembro => {
    const li = document.createElement("li");
    li.textContent = `${miembro.nombre} (${miembro.relacion}, ${miembro.edad} años) ${miembro.vivo ? "" : "🪦"}`;
    lista.appendChild(li);
  });
}

function envejecerFamilia(familia) {
  familia.forEach(miembro => {
    miembro.edad++;

    // Simulación básica de muerte
    const probabilidadMuerte = Math.max(0, miembro.edad - 80); // más edad, más chance
    if (Math.random() * 100 < probabilidadMuerte) {
      miembro.vivo = false;
    }
  });

  // Opcional: eliminar miembros muertos del array
  // familia = familia.filter(miembro => miembro.vivo);

  mostrarFamilia(familia); // actualizamos el UI
}