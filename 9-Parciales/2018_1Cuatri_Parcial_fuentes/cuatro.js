// Pedir dos números y mostrar el resultado:
// Si son iguales los muestro concatenados.
// Si el primero es mayor, los resto,
// de lo contrario los sumo.
// Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
// "la suma es xxx y supero el 10"

function mostrar() {
  var numero;
  var numero2;

  numero = parseInt(prompt("Ingrese el primer numero"));
  numero2 = parseInt(prompt("Ingrese el segundo numero"));

  if(numero > numero2) {
    mensaje = numero - numero2;
  } else {
    if(numero == numero2) {
      mensaje = numero.toString() + numero2.toString();
    } else {
      mensaje = numero + numero2;
      if(mensaje > 10) {
        mensaje = "la suma es " + mensaje + " y supero el 10";
      }
    }
  }

  alert(mensaje);


}
