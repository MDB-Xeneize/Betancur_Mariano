/*Crear el archivo “ejercicio_10.js”. Declarar un array llamado “meses” y que tenga guardado los
meses del año. Luego el usuario debe poder ingresar en el navegador un número de 1 al 12 y este
le devolverá el nombre del mes. Por ejemplo escribe 5 debe devolver el mes mayo.
 */  

let meses, val1
meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
val1=prompt("Ingrese el numero de un mes: ")
document.write(meses[val1-1])
