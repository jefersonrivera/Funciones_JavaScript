function pintar(elementoId) {
  Elemento = document.querySelector("#" + elementoId);
  Elemento.style.backgroundColor = "black";
}

Elemento.addEventListener("click", pintar);
