/**
 * Crear algoritmo que devuelva numero
 * menor y mayor de y
 */
function menorMayor() {
  let num1 = parseInt(prompt("Ingrese el primer número:"));
  let num2 = parseInt(prompt("Ingrese el segundo número:"));
  if (num1 < num2) {
    alert("El número menor es: " + num1);
    alert("El número mayor es: " + num2);
  } else {
    alert("El número menor es: " + num2);
    alert("El número mayor es: " + num1);
    alert("un cambio");
  }
  alert("otro cambio");
}
