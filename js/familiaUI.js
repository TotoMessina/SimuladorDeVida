document.addEventListener("DOMContentLoaded", () => {
  const btnVerFamilia = document.getElementById("btn-ver-familia");
  const menuFamilia = document.getElementById("menu-familia");
  const listaFamilia = document.getElementById("lista-familia");

  const menuDetalle = document.getElementById("menu-familiar-detalle");
  const nombreFamiliar = document.getElementById("nombre-familiar");
  const relacionFamiliar = document.getElementById("relacion-familiar");

  const btnCerrarDetalle = document.getElementById("btn-cerrar-detalle");

  btnVerFamilia.addEventListener("click", () => {
    if (menuFamilia.classList.contains("oculto")) {
      mostrarMenuFamilia();
      menuFamilia.classList.remove("oculto");
    } else {
      menuFamilia.classList.add("oculto");
      menuDetalle.classList.add("oculto");
    }
  });

  function mostrarMenuFamilia() {
    listaFamilia.innerHTML = "";
    personajeActual.familia.forEach((familiar, i) => {
      const li = document.createElement("li");
      li.textContent = `${familiar.nombre} (${familiar.relacion}) - ${familiar.edad} años`;
      li.addEventListener("click", () => mostrarDetalleFamiliar(familiar));
      listaFamilia.appendChild(li);
    });
  }

  function mostrarDetalleFamiliar(familiar) {
    menuDetalle.classList.remove("oculto");
    nombreFamiliar.textContent = familiar.nombre;
    relacionFamiliar.textContent = `Relación: ${familiar.nivelRelacion || "Neutra"}`;

    document.getElementById("btn-saludar").onclick = () => {
      agregarEvento(`Saludaste a ${familiar.nombre}.`);
      familiar.nivelRelacion = "Buena";
    };

    document.getElementById("btn-discutir").onclick = () => {
      agregarEvento(`Tuviste una discusión con ${familiar.nombre}.`);
      familiar.nivelRelacion = "Tensa";
    };

    document.getElementById("btn-regalar").onclick = () => {
      agregarEvento(`Le diste un regalo a ${familiar.nombre}.`);
      familiar.nivelRelacion = "Muy buena";
    };
  }

  btnCerrarDetalle.addEventListener("click", () => {
    menuDetalle.classList.add("oculto");
  });
});
