/*	Ejercicio 9:
Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales
< 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5
“Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente*/

var notas = [];
while (true) {
  var carga = prompt("Ingrese las notas del alumno. Cuando se ingrese CERO se finaliza la carga: ");
  if (carga !== "0") {
    var nota = parseFloat(carga); // Me aseguro que las cargas sean valores flotantes ya que puede haber una nota 7,5
    if (nota >= 1 && nota <= 10) { // Me aseguro de que las notas esten entre 1 y 10. De no ser asi cae en el ELSE 
      notas.push(nota);
    } else {
      console.log("La nota ingresada está fuera del rango válido (1-10).");
    }
  } else { //Hasta aca llego solamente si la carga es CERO
    break;
  }
}

var resultado = 0;
for (var i = 0; i < notas.length; i++) {
  resultado += notas[i]; //Sumo todas las notas 
}
var promedio = resultado / notas.length;

if (promedio > 8) {
  console.log("Sobresaliente");
} else if (promedio >= 6 && promedio <= 8) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}