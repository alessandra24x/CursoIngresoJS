function mostrar()
{
var mesDelAño;

mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
  case "Enero":
    mesDelAño = "que comiences bien el año!!!."
    break;
  case "Marzo":
    mesDelAño = "a clases!!!.";
    break;
  case "Julio":
    mesDelAño = "se vienen las vacaciones!!!.";
    break;
  case "Diciembre":
    mesDelAño = "Felices fiesta!!!.";
    break;
  default:
    mesDelAño = "Disfruta siempre que puedas";
}
alert(mesDelAño);

}//FIN DE LA FUNCIÓN