// Se ingresa una hora.
// Si está entre las 6 y las 11 mostrar:"es de mañana",
// si es desde las 12 a las 19: "es de tarde",
// de lo contrario informar que es de noche.
// Informar si la hora no es válida.
// Si es de noche y la hora es menor a 24 mostrar se debe agregar el mensaje : "a dormir".

function mostrar() {
  var hora;
  var mensaje;

  hora = document.getElementById("laHora").value;

  switch(hora) {
    case "mañana":
    if(hora >= 6 || hora <= 11) {
    mensaje = "es de mañana";
  }
    break;
    case "tarde":
    if(hora >= 12 || hora <= 19) {
      mensaje = "es de tarde";
    } else {
      mensaje = "es de noche";
    }
    break;
    case "noche":
    if(hora < 24) {
      mensaje = "a dormir";
    }
    break;
    default:
    if(hora < 0 || hora > 24) {
      mensaje = "hora invalida";
    }
  }
  alert(mensaje);
}

