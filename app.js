function encriptarTexto() {
    const texto = document.getElementById('texto').value;
    let textoEncriptado = texto
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  
    document.getElementById('resultado').textContent = textoEncriptado;
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
  }