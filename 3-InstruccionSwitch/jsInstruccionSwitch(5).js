function mostrar()
{

var laHora;
laHora = document.getElementById('hora').value;

switch (laHora) {
  case "7":
  case "8":
  case "9":
  case "10":
  case "11":
    laHora = "Es de mañana"
    break;
  default:
    laHora = "Es otro horario";
}

alert (laHora);

}//FIN DE LA FUNCIÓN