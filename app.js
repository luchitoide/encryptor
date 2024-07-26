const mediaQuery = window.matchMedia("(max-width: 1024px)");
mediaQuery.addEventListener('change', ocultarElementos);

function encriptarTexto() {
  const texto = document.getElementById("texto").value;
  const esValido = validarTextarea(texto);

  if (esValido) {
    let textoEncriptado = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    document.getElementById("resultado").textContent = textoEncriptado;
    mostrarElementos();
  } else {
    alert(
      "El texto no es válido. Contiene mayúsculas o caracteres especiales."
    );
  }
}

function desencriptarTexto() {
  const texto = document.getElementById("texto").value;
  const esValido = validarTextarea(texto);

  if (esValido) {
    let textoDesencriptado = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    document.getElementById("resultado").textContent = textoDesencriptado;
    mostrarElementos();
  } else {
    alert(
      "El texto no es válido. Contiene mayúsculas o caracteres especiales."
    );
  }
}

function mostrarElementos() {
  document.getElementById("imagen").style.display = "none";
  document.getElementById("texto-seccion-2").style.display = "none";
  document.getElementById("resultado").style.textAlign = "start";
  document.getElementById("resultado").style.fontWeight = "400";
  document.getElementById("resultado").style.color = "var(--color-gris-claro)";
  document.getElementById("seccion-2").style.justifyContent = "space-between";
  document.getElementById("boton-copiar").style.display = "block";
}

function ocultarElementos() {
  const textarea = document.getElementById("texto");
  if (textarea.value === "") {
    document.getElementById("boton-copiar").style.display = "none";
    document.getElementById("resultado").textContent =
      "No se encuentra ningun texto";
    document.getElementById("texto-seccion-2").style.display = "block";
    document.getElementById("resultado").style.fontWeight = "600";
    document.getElementById("resultado").style.color =
      "var(--color-gris-oscuro)";
    document.getElementById("seccion-2").style.justifyContent = "center";

    
    manejarImagen(mediaQuery)
    
  }
}

function manejarImagen(evento){
  if (evento.matches) {
    document.getElementById("imagen").style.display = "none";
  } else {
    document.getElementById("imagen").style.display = "block";
  }
}

function copiarTexto() {
  let contenido = document.getElementById("resultado").innerText;
  var temporal = document.createElement("textarea");
  temporal.value = contenido;
  document.body.appendChild(temporal);

  temporal.select();
  temporal.setSelectionRange(0, 99999);

  document.execCommand("copy");

  document.body.removeChild(temporal);
}

function validarTextarea(texto) {
  const regex = /^[a-z -]+$/;

  if (regex.test(texto)) {
    return true;
  } else {
    return false;
  }
}
