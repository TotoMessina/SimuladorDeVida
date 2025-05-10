// Datos posibles para crear personajes aleatorios
const nombres = ["Juan", "Ana", "Lucía", "Pedro", "Mateo", "Sofía", "Martina", "Diego", "Camila"];
const apellidos = ["Gómez", "Pérez", "Rodríguez", "Fernández", "López", "Ramírez", "Torres", "Vargas"];
const paises = ["España", "México", "Argentina", "Chile", "Colombia"];
const ciudades = {
  España: ["Madrid", "Barcelona", "La Palma", "Valencia"],
  México: ["CDMX", "Guadalajara", "Monterrey"],
  Argentina: ["Buenos Aires", "Córdoba", "Rosario"],
  Chile: ["Santiago", "Valparaíso"],
  Colombia: ["Bogotá", "Medellín"]
};
const rangosSociales = ["Plebeyo", "Clase media", "Alta sociedad"];
const talentos = ["Deportes", "Música", "Artes", "Academia", "Comedia"];

// Función para obtener un valor aleatorio de una lista
function elegirAleatorio(lista) {
  return lista[Math.floor(Math.random() * lista.length)];
}

// Función principal para generar personaje aleatorio
function generarPersonajeAleatorio() {
  const nombre = `${elegirAleatorio(nombres)} ${elegirAleatorio(apellidos)}`;
  const genero = Math.random() < 0.5 ? "Hombre" : "Mujer";
  const pais = elegirAleatorio(paises);
  const ciudad = elegirAleatorio(ciudades[pais]);
  const rangoSocial = elegirAleatorio(rangosSociales);
  const talento = elegirAleatorio(talentos);

  const personaje = {
    nombre,
    genero,
    pais,
    ciudad,
    rangoSocial,
    talento,
    edad: 0,
    felicidad: Math.floor(Math.random() * 31) + 70,
    salud: Math.floor(Math.random() * 41) + 60,
    inteligencia: Math.floor(Math.random() * 41) + 60,
    aspecto: Math.floor(Math.random() * 41) + 60,
    familia: generarFamilia() // 👈 asignamos familia ANTES de guardar
  };

  personajeActual = personaje;

  // Guardamos en localStorage ya con familia incluida
  localStorage.setItem("personajeActual", JSON.stringify(personaje));

  return personaje;
}

// Exportamos si usamos módulos ES6
// export { generarPersonajeAleatorio };
