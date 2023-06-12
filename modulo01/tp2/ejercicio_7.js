/* Escribir una función que reciba un texto y lo devuelva al revés. */

 function alReves(texto) {
  let textoRevertido = "";
  for (let i = texto.length - 1; i >= 0; i--) {
    textoRevertido += texto[i];
  }
  return textoRevertido;
}

var texto = prompt("Ingrese un texto: ");
console.log(alReves(texto));
