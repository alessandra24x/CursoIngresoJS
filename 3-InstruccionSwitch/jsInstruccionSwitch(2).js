function mostrar()
{
//tomo la edad
var mesDelAño;

mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
  case "Julio":
  case "Agosto":
  case "Septiembre":
    mesDelAño = "Abrigate que hace frio."
    break;
  case "Octubre":
  case "Noviembre":
  case "Diciembre":
  case "Enero":
  case "Febrero":
  case "Marzo":
    mesDelAño = "Ya pasamos el frio, ahora calor!!!.";
    break;
  case "Abril":
  case "Mayo":
  case "Junio":
    mesDelAño = "Falta para el invierno.";
    break;
}

alert (mesDelAño);

}//FIN DE LA FUNCIÓN