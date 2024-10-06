// ejemplo del requerimiento
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    /* Cambiar a color 1 */
  } else if (event.key === "s") {
    /* Cambiar a color 2 */
  }
});

// solucion al requerimiento

var color;
let pulsar = document.getElementById("key");
document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    color = "#ff69b4";
    rellenar(pulsar, color);
  } else if (event.key === "s" || event.key === "S") {
    color = "#ff4400";
    rellenar(pulsar, color);
  } else if (event.key === "d" || event.key === "D") {
    color = "#00ffff";
    rellenar(pulsar, color);
  } else if (event.key === "q" || event.key === "Q") {
    color = "#9932cc";
    nuevo(color);
  } else if (event.key === "w" || event.key === "W") {
    color = "#778899";
    nuevo(color);
  } else if (event.key === "e" || event.key === "E") {
    color = "#8b4513";
    nuevo(color);
  }
});

function rellenar(elemento, color) {
  elemento.style.backgroundColor = color;
}

function nuevo(color) {
  const nuevodiv = document.createElement("div");
  nuevodiv.style.width = "200px";
  nuevodiv.style.height = "200px";
  nuevodiv.style.border = "2px solid black";
  nuevodiv.style.backgroundColor = color;

  document.body.appendChild(nuevodiv);
}
