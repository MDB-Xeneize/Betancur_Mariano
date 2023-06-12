/*  Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días.*/

function DiasDelMes(mes) {
    const mesesCon31Dias = [1, 3, 5, 7, 8, 10, 12];
    const mesesCon30Dias = [4, 6, 9, 11];
  
    if (mesesCon31Dias.includes(mes)) {
      return "Tiene 31 días.";
    } else if (mesesCon30Dias.includes(mes)) {
      return "Tiene 30 días.";
    } else if (mes === 2) {
      return "Tiene 28 o 29 días.";
    } else {
      return "Mes inválido. Por favor, ingresa un número de mes válido (1-12).";
    }
  }
  
 
  const mes = parseInt(prompt("Ingresa el número del mes:"));
  
  const resultado = DiasDelMes(mes);
  console.log(resultado);
  