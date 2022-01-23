let texto = document.querySelector("#input");
let saida = document.querySelector("#output");
let criptografar = document.querySelector("#crypto");
let descriptografar = document.querySelector("#decryption");
let copiar = document.querySelector("#copy");

criptografar.addEventListener("click", event => {
  event.preventDefault()
  resultado.textContent = caracteres(criptografa(texto.value))
  texto.value = " "
})

descriptografar.addEventListener("click", event => {
  event.preventDefault()
  resultado.textContent = caracteres(descriptografa(texto.value))
  texto.value = " "
})

function criptografa(texto) {
  let textoCriptografado = texto
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat')
    .toLowerCase()

  return textoCriptografado
}

function descriptografa(texto) {
  let textoDescriptografado = texto
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u')

  return textoDescriptografado
}