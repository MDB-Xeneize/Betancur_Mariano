/*Ejercicio 3:
El factorial de un número entero positivo se define como el producto de todos los números
naturales anteriores o iguales a él. Es decir que multiplicando todos los factores n x (n-1) x (n-2) x ... x
1. 
Por ejemplo: el factorial de */

var n , resultado;
n = prompt("Ingrese el numero del cual quiere saber su factorial: ") // Yo aca le piedo a usuario que ingrese un numero se supene, pero sie l usuraio me ingresa una letra que onda 
resultado=1

for (var i = n; i >= 1; i--) {
    resultado *= i;
}
document.write(resultado)