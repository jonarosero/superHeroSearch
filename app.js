// Selecciona todos los elementos que tengan la clase "tab-body-single" y los almacena en la variable "allTabsBody"
const allTabsBody = document.querySelectorAll(".tab-body-single");

// Selecciona todos los elementos que tengan la clase "tab-head-single" y los almacena en la variable "allTabsHead"
const allTabsHead = document.querySelectorAll(".tab-head-single");

// Establece la pestaña activa en 1 por defecto
let activeTab = 1;

// Función que muestra la pestaña activa en el cuerpo y en la cabeza de la pestaña
const init = () => {
  showActiveTabBody();
  showActiveTabHead();
};

// Función que agrega la clase "active-tab" a la cabeza de la pestaña activa
const showActiveTabHead = () =>
  allTabsHead[activeTab - 1].classList.add("active-tab");

// Función que oculta todos los cuerpos de pestañas y agrega la clase "show-tab" al cuerpo de la pestaña activa
const showActiveTabBody = () => {
  hideAllTabBody();
  allTabsBody[activeTab - 1].classList.add("show-tab");
};

// Función que oculta todos los cuerpos de las pestañas mediante la eliminación de la clase "show-tab"
const hideAllTabBody = () =>
  allTabsBody.forEach((singleTabBody) =>
    singleTabBody.classList.remove("show-tab")
  );

// Función que oculta todas las cabezas de las pestañas mediante la eliminación de la clase "active-tab"
const hideAllTabHead = () =>
  allTabsHead.forEach((singleTabHead) =>
    singleTabHead.classList.remove("active-tab")
  );

// Se llama a la función "init" cuando se carga la página
window.addEventListener("DOMContentLoaded", () => init());

// Agrega un escuchador de eventos click a cada cabeza de pestaña
allTabsHead.forEach(singleTabHead => {
  singleTabHead.addEventListener('click', () => {
    // Oculta todas las cabezas de pestaña
    hideAllTabHead();
    // Establece el valor de "activeTab" según el atributo "data-id" del botón de cabeza de la pestaña clicada
    activeTab = parseInt(singleTabHead.dataset.id);
    // Muestra la nueva pestaña activa en la página
    showActiveTabHead();
    showActiveTabBody();
  });
});
