textarea = getElementById("texto")

textarea.addEventListener('input', () => {
  if (textarea.value === '') {
    placeholderImage.style.display = 'block';
  } 
});

function encriptarTexto() {
    const texto = document.getElementById('texto').value;
    let textoEncriptado = texto
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  
    document.getElementById('resultado').textContent = textoEncriptado;
    mostrarElementos();
  }
  
  function desencriptarTexto() {
    const texto = document.getElementById('texto').value;
    let textoDesencriptado = texto
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  
    document.getElementById('resultado').textContent = textoDesencriptado;
    mostrarElementos();
  }

  function mostrarElementos() {
    document.getElementById("imagen").style.display = "none";
    document.getElementById("boton-copiar").style.display = "block";
  }

  function ocultarElementos() {
    document.getElementById("imagen").style.display = "block";
    document.getElementById("boton-copiar").style.display = "none";
  }

  function copiarTexto(){
    let contenido = document.getElementById("resultado").innerText;
     var temporal = document.createElement("textarea");
     temporal.value = contenido;
     document.body.appendChild(temporal);

     temporal.select();
     temporal.setSelectionRange(0, 99999);

     document.execCommand("copy");

     document.body.removeChild(temporal);

  }