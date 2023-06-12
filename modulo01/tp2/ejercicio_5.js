function may_min(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == array[i].toUpperCase()) {
        return "Hay mayúsculas en la cadena.";
      }
    }
    return "No hay mayúsculas en la cadena.";
  }
  
  var cadena = prompt("Ingresa una cadena de texto: ");
  console.log(may_min(cadena));

  /* LA CONSIGANA DICE QUE HAY DEVOLVER SI HAY SOLO MINUSCULAS, SOLO MAYUSCULAS O AMBAS 
  OSEA SON 3 LAS CONDICIONES */