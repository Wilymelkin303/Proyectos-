const navEl_boton = document.querySelector(".el_boton");
const navLas_ul = document.querySelector(".las_ul");

navEl_boton.addEventListener("click", () => {
  navLas_ul.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});