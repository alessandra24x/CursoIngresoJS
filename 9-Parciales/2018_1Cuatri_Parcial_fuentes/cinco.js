// pedir el ingreso de un planeta del sistema solar
// Si es la tierra mostrar "acá vivimos".
// Si está más cerca del sol, "acá hace más calor".
// Si está más lejos del sol, "acá hace más frio".
// Si no es un planeta valido informarlo.
// Aclaración: los planetas se ingresan en minúscula (Mercurio y Venus están antes que la tierra).

function mostrar() {
  var planeta;
  var mensaje;

  planeta = prompt("Ingrese un planeta");

  switch(planeta) {
    case "tierra":
    mensaje = "acá vivimos";
    break;
    case "mercurio":
    mensaje = "acá hace más calor";
    break;
    case "venus":
    mensaje = "acá hace más calor";
    break;
    case "marte":
    mensaje = "acá hace más calor";
    break;
    case "jupiter":
    mensaje = "acá hace más calor";
    break;
    case "saturno":
    mensaje = "acá hace más frio";
    break;
    case "urano":
    mensaje = "acá hace más frio";
    break;
    case "neptuno":
    mensaje = "acá hace más frio";
    break;
    default:
    mensaje = "planeta no válido";
    break;
  }
  alert(mensaje);
}
