function mostrarNotificacion(mensaje) {
  const noti = document.getElementById("notificacion");
  noti.textContent = mensaje;
  noti.classList.remove("oculto");
  noti.classList.add("mostrar");

  setTimeout(() => {
    noti.classList.remove("mostrar");
    noti.classList.add("oculto");
  }, 2500);
}
