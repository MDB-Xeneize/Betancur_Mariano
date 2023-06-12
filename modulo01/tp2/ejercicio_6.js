/* Escribir un script que muestre la posición de la primera vocal de un texto introducido por
teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1. */


var vocales = ['a', 'e', 'i', 'o', 'u'];
var cadena = prompt("Ingrese una cadena de texto: ");
for (var i = 0; i < cadena.length; i++) {
  var letra = cadena[i].toLowerCase(); //Hago que todo el script pase a minuscula por si el usuario escribe alguna letra en mayuscula
  if (vocales.includes(letra)) { // Con .includes corroboro si la letra iterada esta dentro de las vocales. Entonces recien ahi puede entrar al if
    console.log("'" + letra + "' es la letra nº" + (i+1));
    break
  }
}
